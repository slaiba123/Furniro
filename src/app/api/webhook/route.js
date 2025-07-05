import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@sanity/client';

// Stripe setup
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// Sanity setup
const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2025-03-06',
});

// Webhook secret
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  console.log('⚙ Incoming Stripe Webhook...');

  const rawBody = await req.arrayBuffer(); // raw body for signature check
  const sig = req.headers.get('stripe-signature');

  let event;
  try {
    event = stripe.webhooks.constructEvent(Buffer.from(rawBody), sig, endpointSecret);
    console.log('✅ Stripe signature verified.');
  } catch (err) {
    console.error('❌ Signature verification failed:', err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log('📥 Event: checkout.session.completed');
    console.log('🧾 Full session:', JSON.stringify(session, null, 2));
    console.log('📦 Metadata:', session.metadata);

    const userId = session.metadata?.userId || null;

    if (!session.metadata?.products) {
      console.error('❌ No products metadata found.');
      return NextResponse.json({ error: 'Missing products metadata.' }, { status: 400 });
    }

    let products = [];
    try {
      products = JSON.parse(session.metadata.products);
      if (!Array.isArray(products)) throw new Error('Parsed products is not an array.');
      console.log('✅ Parsed products:', products);
    } catch (err) {
      console.error('❌ Failed to parse products:', err.message);
      return NextResponse.json({ error: 'Invalid products metadata.' }, { status: 400 });
    }

    const totalPrice = session.amount_total / 100;
    const deliveryDate = generateDeliveryDate();

    const orderDoc = {
      _type: 'order',
      userId,
      products,
      totalPrice,
      deliveryDate,
    };

    console.log('📤 Sending order to Sanity:', orderDoc);

    try {
      const saved = await sanity.create(orderDoc);
      console.log('✅ Order saved in Sanity:', saved);
    } catch (err) {
      console.error('❌ Failed to save in Sanity:', err.message);
      return NextResponse.json({ error: 'Failed to save order to Sanity.' }, { status: 500 });
    }
  } else {
    console.log(`ℹ️ Ignored event type: ${event.type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

// Delivery date generator (next weekday within 7 days)
function generateDeliveryDate() {
  const today = new Date();
  for (let i = 1; i <= 7; i++) {
    const future = new Date();
    future.setDate(today.getDate() + i);
    if (future.getDay() !== 0 && future.getDay() !== 6) {
      return future.toISOString();
    }
  }
  return new Date().toISOString(); // fallback
}
