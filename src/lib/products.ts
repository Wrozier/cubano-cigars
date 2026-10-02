// Cubano Cigars – Product data layer
// Supports both mock data (for development) and live WooCommerce REST API

export type Product = {
  id: string;
  slug: string;
  name: string;
  type: string;
  price: number;
  image: string;
  description: string;
  tastingNotes: string[];
  wrapper: string;
  binder: string;
  filler: string;
  strength: string;
  length: string;
  ringGauge: string;
  origin: string;
  rating: number;
  reviews: number;
  badge?: string;
};

// ---------- Mock data (used when no API keys are present) ----------
export const products: Product[] = [
  {
    id: "1",
    slug: "reserva-especial",
    name: "Reserva Especial",
    type: "Robusto",
    price: 28.0,
    image: "/Havana-Box-300x300.jpg",
    description: "A rich, complex blend with deep earthy notes and a smooth, lingering finish.",
    tastingNotes: ["Earth & Leather", "Dark Chocolate", "Cedar"],
    wrapper: "Connecticut Broadleaf Maduro",
    binder: "Dominican Olor Seco",
    filler: "Dominican Piloto Ligero & Viso",
    strength: "Medium – Full",
    length: "5 in",
    ringGauge: "50",
    origin: "Dominican Republic",
    rating: 4.9,
    reviews: 128,
    badge: "Best Seller",
  },
  {
    id: "2",
    slug: "1948",
    name: "1948",
    type: "Toro",
    price: 24.5,
    image: "/Valdez-Box-scaled-300x300.jpg",
    description: "Named for a pivotal year in our family’s journey. Balanced and refined.",
    tastingNotes: ["Cedar & Spice", "Nutty", "Light Coffee"],
    wrapper: "Nicaraguan Habano",
    binder: "Nicaraguan",
    filler: "Cuban-seed Nicaraguan",
    strength: "Medium",
    length: "6 in",
    ringGauge: "52",
    origin: "Nicaragua",
    rating: 4.8,
    reviews: 94,
  },
  {
    id: "3",
    slug: "clasico",
    name: "Clásico",
    type: "Churchill",
    price: 22.0,
    image: "/The-55-Box-300x300.jpg",
    description: "Our everyday classic. Approachable yet full of character.",
    tastingNotes: ["Creamy", "Mild Spice", "Wood"],
    wrapper: "Ecuadorian Connecticut",
    binder: "Indonesian",
    filler: "Dominican & Nicaraguan",
    strength: "Mild – Medium",
    length: "7 in",
    ringGauge: "48",
    origin: "Dominican Republic",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "4",
    slug: "oro",
    name: "Oro",
    type: "Robusto",
    price: 30.0,
    image: "/Aficionio-Box-300x300.jpg",
    description: "Limited gold-band expression. Bold, luxurious, and memorable.",
    tastingNotes: ["Dark Chocolate & Coffee", "Leather", "Spice"],
    wrapper: "Mexican San Andrés",
    binder: "Nicaraguan",
    filler: "Cuban-seed blend",
    strength: "Full",
    length: "5 in",
    ringGauge: "52",
    origin: "Nicaragua",
    rating: 4.9,
    reviews: 67,
    badge: "Limited",
  },
  {
    id: "5",
    slug: "cuban-blend",
    name: "Cuban Blend",
    type: "Toro",
    price: 27.5,
    image: "/b415c9_0569b6e9049c4a4aa41975c824423fa6_mv2-300x300.png",
    description: "Bourbon barrel-aged complexity with natural sweet notes. One of our best sellers.",
    tastingNotes: ["Oak", "Sweet Spice", "Natural Sweetness"],
    wrapper: "Nicaraguan Sun Grown",
    binder: "Cuban-seed Nicaraguan",
    filler: "Cuban-seed Nicaraguan",
    strength: "Medium",
    length: "6 in",
    ringGauge: "52",
    origin: "Nicaragua",
    rating: 4.9,
    reviews: 203,
    badge: "Best Seller",
  },
  {
    id: "6",
    slug: "el-boss",
    name: "El Boss",
    type: "Robusto",
    price: 26.0,
    image: "/b415c9_b5b90c2bd9eb4889a294bcc948cb4e6b_mv2-300x300.png",
    description: "Bold character with a confident finish.",
    tastingNotes: ["Pepper", "Earth", "Cocoa"],
    wrapper: "Nicaraguan Habano",
    binder: "Nicaraguan",
    filler: "Nicaraguan Ligero",
    strength: "Medium – Full",
    length: "5 in",
    ringGauge: "50",
    origin: "Nicaragua",
    rating: 4.6,
    reviews: 81,
  },
  {
    id: "7",
    slug: "aficionio",
    name: "Aficionio",
    type: "Robusto",
    price: 31.0,
    image: "/Aficionio-Box-300x300.jpg",
    description: "A distinctive smoke with a smooth draw and balanced cedar finish.",
    tastingNotes: ["Cedar", "Sweet Tobacco", "Roasted Almond"],
    wrapper: "Ecuadorian Connecticut",
    binder: "Dominican",
    filler: "Dominican & Nicaraguan",
    strength: "Medium",
    length: "5 in",
    ringGauge: "50",
    origin: "Dominican Republic",
    rating: 4.8,
    reviews: 52,
    badge: "New",
  },
  {
    id: "8",
    slug: "havana",
    name: "Havana",
    type: "Toro",
    price: 29.5,
    image: "/b415c9_a6b875dc56c94d1cbab49467c0a28019_mv2-300x300.jpeg",
    description: "A classic Cuban-inspired profile with warm spice and a refined finish.",
    tastingNotes: ["Cocoa", "Spice", "Earth"],
    wrapper: "Habano",
    binder: "Nicaraguan",
    filler: "Cuban-seed blend",
    strength: "Medium – Full",
    length: "6 in",
    ringGauge: "52",
    origin: "Cuba-inspired",
    rating: 4.9,
    reviews: 74,
    badge: "Featured",
  },
  {
    id: "9",
    slug: "valdez",
    name: "Valdez",
    type: "Churchill",
    price: 33.0,
    image: "/b415c9_e415f3850f1e4b7eaaa8c655444c080f_mv2-300x300.jpeg",
    description: "An elegant and layered smoke with polished sweetness and a lasting finish.",
    tastingNotes: ["Honey", "Nutmeg", "Dark Toast"],
    wrapper: "Corojo",
    binder: "Nicaraguan",
    filler: "Nicaraguan & Dominican",
    strength: "Medium",
    length: "7 in",
    ringGauge: "48",
    origin: "Nicaragua",
    rating: 4.8,
    reviews: 61,
  },
  {
    id: "10",
    slug: "the-55",
    name: "The 55",
    type: "Robusto",
    price: 27.0,
    image: "/The-55-Box-300x300.jpg",
    description: "A balanced everyday smoke crafted for smooth complexity and easy enjoyment.",
    tastingNotes: ["Cream", "Toffee", "Wood"],
    wrapper: "Connecticut",
    binder: "Dominican",
    filler: "Dominican & Nicaraguan",
    strength: "Mild – Medium",
    length: "5 in",
    ringGauge: "52",
    origin: "Dominican Republic",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "11",
    slug: "fifty-five-single",
    name: "Fifty Five Single",
    type: "Single",
    price: 18.5,
    image: "/Fifty-Five-Single-300x300.jpg",
    description: "A single-cigar experience crafted for a crisp, clean draw and smooth finish.",
    tastingNotes: ["Creamy", "Mild Spice", "Cocoa"],
    wrapper: "Connecticut",
    binder: "Dominican",
    filler: "Nicaraguan & Dominican",
    strength: "Mild",
    length: "5 in",
    ringGauge: "42",
    origin: "Dominican Republic",
    rating: 4.6,
    reviews: 44,
  },
  {
    id: "12",
    slug: "website-photo-3",
    name: "Website Photo 3",
    type: "Featured",
    price: 35.0,
    image: "/3267d4_8f4c91771ef74f9db8692fe70be025ae_mv2-300x300.jpeg",
    description: "A signature expression with elevated notes and an unforgettable presentation.",
    tastingNotes: ["Leather", "Molasses", "Cedar"],
    wrapper: "Maduro",
    binder: "Nicaraguan",
    filler: "Cuban-seed blend",
    strength: "Full",
    length: "6 in",
    ringGauge: "54",
    origin: "Nicaragua",
    rating: 5.0,
    reviews: 31,
    badge: "Collector",
  },
  {
    id: "13",
    slug: "img-1024",
    name: "IMG 1024",
    type: "Limited",
    price: 32.5,
    image: "/IMG_1024-1.jpeg",
    description: "Limited-run style with rich texture and a layered complexity from start to finish.",
    tastingNotes: ["Tree Fruit", "Earth", "Sweet Spice"],
    wrapper: "Habano",
    binder: "Nicaraguan",
    filler: "Dominican & Nicaraguan",
    strength: "Medium – Full",
    length: "6 in",
    ringGauge: "50",
    origin: "Nicaragua",
    rating: 4.8,
    reviews: 37,
  },
  {
    id: "14",
    slug: "ko-ko-mo",
    name: "Ko Ko Mo",
    type: "Cigar",
    price: 15.0,
    image: "/b415c9_d63d7740bc194a2aab57dec04f83ae0b_mv2-300x300.jpeg",
    description: "Ko Ko Mo cigar from the Cubano Cigars collection.",
    tastingNotes: [],
    wrapper: "",
    binder: "",
    filler: "",
    strength: "Not specified",
    length: "",
    ringGauge: "",
    origin: "",
    rating: 0,
    reviews: 0,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}

// ---------- Live WooCommerce REST API helpers ----------

function getAuthHeader(): string | null {
  const key = process.env.WC_CONSUMER_KEY;
  const secret = process.env.WC_CONSUMER_SECRET;
  if (!key || !secret) return null;
  return "Basic " + Buffer.from(`${key}:${secret}`).toString("base64");
}

/** Map a raw WooCommerce product to our Product type */
function mapWooProduct(p: any): Product {
  const attrs = p.attributes || [];
  const getAttr = (name: string) =>
    attrs.find((a: any) => a.name?.toLowerCase() === name.toLowerCase())?.options?.[0] || "";

  return {
    id: String(p.id),
    slug: p.slug,
    name: p.name,
    type: getAttr("Size") || getAttr("Type") || "Cigar",
    price: parseFloat(p.price) || 0,
    image: p.images?.[0]?.src || "",
    description: p.short_description?.replace(/<[^>]+>/g, "") || p.description?.replace(/<[^>]+>/g, "") || "",
    tastingNotes: getAttr("Tasting Notes")
      ? getAttr("Tasting Notes").split(",").map((s: string) => s.trim())
      : [],
    wrapper: getAttr("Wrapper"),
    binder: getAttr("Binder"),
    filler: getAttr("Filler"),
    strength: getAttr("Strength") || "Medium",
    length: getAttr("Length"),
    ringGauge: getAttr("Ring Gauge"),
    origin: getAttr("Origin") || "Nicaragua",
    rating: parseFloat(p.average_rating) || 0,
    reviews: p.rating_count || 0,
    badge: p.tags?.some((t: any) => t.slug === "best-seller")
      ? "Best Seller"
      : p.tags?.some((t: any) => t.slug === "limited")
      ? "Limited"
      : undefined,
  };
}

/**
 * Fetch all products from WooCommerce.
 * Falls back to mock data if API keys are missing or the request fails.
 */
export async function fetchProducts(): Promise<Product[]> {
  const base = process.env.NEXT_PUBLIC_WP_URL;
  const auth = getAuthHeader();

  if (!base || !auth) {
    console.log("[products] Using mock data (no WC API keys configured)");
    return products;
  }

  try {
    const res = await fetch(`${base}/wp-json/wc/v3/products?per_page=50&status=publish`, {
      headers: { Authorization: auth },
      next: { revalidate: 60 }, // ISR: revalidate every 60s
    });

    if (!res.ok) throw new Error(`WooCommerce API ${res.status}`);

    const data = await res.json();
    return data.map(mapWooProduct);
  } catch (err) {
    console.error("[products] WooCommerce fetch failed, falling back to mock data", err);
    return products;
  }
}

/**
 * Fetch a single product by slug from WooCommerce.
 */
export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const base = process.env.NEXT_PUBLIC_WP_URL;
  const auth = getAuthHeader();

  if (!base || !auth) {
    return getProductBySlug(slug) || null;
  }

  try {
    const res = await fetch(
      `${base}/wp-json/wc/v3/products?slug=${encodeURIComponent(slug)}`,
      {
        headers: { Authorization: auth },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) throw new Error(`WooCommerce API ${res.status}`);

    const data = await res.json();
    if (!data.length) return null;
    return mapWooProduct(data[0]);
  } catch (err) {
    console.error("[products] Single product fetch failed", err);
    return getProductBySlug(slug) || null;
  }
}
