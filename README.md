# Cubano Cigars — Next.js + Headless WordPress

Premium redesign of smokecubano.com.

**Stack:** Next.js 16 (App Router) · Tailwind CSS v4 · TypeScript · WooCommerce REST API

---

## Quick Start (local)

```bash
cd cubano-next
npm install
npm run dev
```

Open http://localhost:3000

The site works immediately with **mock product data**.  
To pull real products from your WordPress site, follow the steps below.

---

## Connect to Live WooCommerce (Steps 1–4)

### 1. Create WooCommerce REST API keys

1. Log into WordPress Admin → **WooCommerce → Settings → Advanced → REST API**
2. Click **Add key**
3. Description: `Next.js Frontend`
4. User: an admin user
5. Permissions: **Read** (or Read/Write if you later add cart)
6. Generate and copy the **Consumer Key** and **Consumer Secret**

### 2. (Optional) Improve the product data

In WooCommerce, add custom product attributes for better mapping:
- Wrapper
- Binder
- Filler
- Strength
- Length
- Ring Gauge
- Origin
- Tasting Notes

Also tag products with `best-seller` or `limited` if you want badges.

### 3. Add environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_WP_URL=https://smokecubano.com
WC_CONSUMER_KEY=ck_your_real_key_here
WC_CONSUMER_SECRET=cs_your_real_secret_here
```

### 4. Restart the dev server

```bash
npm run dev
```

The product helpers in `src/lib/products.ts` will automatically switch from mock data to live WooCommerce data.

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── shop/page.tsx            # Product listing
│   └── product/[slug]/page.tsx  # Product detail
├── components/
│   ├── AgeGate.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
└── lib/
    └── products.ts              # Mock data + WooCommerce fetch helpers
```

---

## Deploy

**Recommended setup:**
- Frontend → **Vercel** (or Netlify)
- Backend → Keep your existing WordPress + WooCommerce host

Add the same environment variables in your hosting dashboard.

---

## Notes

- Age gate uses `sessionStorage` (resets when the browser tab is closed).
- Images currently come from Unsplash for the mock data. Once connected to WooCommerce, product images from your media library will be used.
- Cart / checkout is not yet implemented (can be added later via WooCommerce Store API or a headless cart solution).
# cubano-cigars
