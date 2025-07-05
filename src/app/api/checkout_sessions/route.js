import { NextResponse } from "next/server";
import Stripe from "stripe";
import { auth } from "@clerk/nextjs/server"; // ✅ Server-side Clerk auth
import { client } from "@/sanity/lib/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("[CLERK DEBUG] Request body", body);
    const { userId, sessionId } = await auth();
    console.log("[CLERK DEBUG]", { userId, sessionId });

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const minimalProducts = body.items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: body.items.map((item) => ({
        price_data: {
          currency: "pkr",
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      success_url: `${req.headers.get("origin")}/Order-placed`,
      cancel_url: `${req.headers.get("origin")}/Checkout`,
      metadata: {
        userId, // ✅ from Clerk server-side
        products: JSON.stringify(minimalProducts),
      },
    });
    await client.create({
      _type: "order",
      userId: userId,
      products: body.items.map((item) => ({
        _key: item.id || crypto.randomUUID(), // <-- Add this line
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image, // Make sure to send image in body.items
      })),
      totalPrice: body.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      deliveryDate: new Date(
        Date.now() + 5 * 24 * 60 * 60 * 1000
      ).toISOString(), // Example: 5 days from now
      createdAt: new Date().toISOString(),
    });
    // console.log("checkouttttttt",session)
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[STRIPE_ERROR]", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
