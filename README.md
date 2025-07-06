````markdown
# FURNIRO 🛍️

A fully functional, modern e-commerce platform built with **Next.js**, **Sanity CMS**, **Stripe**, **Clerk Authentication**, and **ShadCN UI**. URNIRO delivers a pixel-perfect shopping experience with secure payments and CMS-driven content — all starting from a Figma design.

## ✨ Features

- 🔥 **Responsive UI** built with **ShadCN UI** and **Tailwind CSS**
- 🛒 Product listings, shopping cart, and checkout flow
- 🔐 User authentication and session management via **Clerk**
- 💳 Secure checkout with **Stripe**
- 📝 Content management powered by **Sanity.io**
- 🎨 Pixel-perfect design implementation from **Figma**


## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (App Router), Tailwind CSS, ShadCN UI
- **CMS:** Sanity.io
- **Auth:** Clerk.dev
- **Payments:** Stripe Checkout
- **Deployment:** *(Optional: Vercel or Netlify if deployed)*

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/slaiba123/Furniro.git
cd Furniro
````

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file and add the following:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-07-01
SANITY_TOKEN=your_sanity_token
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

##  Folder Structure

```
/
├── app/               # Next.js App Router
├── components/        # Reusable UI components (ShadCN)
├── lib/               # Utility libraries (Sanity, Stripe)
├── pages/             # Auth callback pages (if any)
├── sanity/            # Sanity schema and config
├── public/            # Static assets
```

##  CMS Setup

You must have a **Sanity.io** project set up:

```bash
cd sanity
sanity init
```

Then define schemas for products, categories, banners, etc.

