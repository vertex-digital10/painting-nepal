export const SITE = {
  name: "Painting Service Nepal",
  tagline: "Best Wall Painting Services in Kathmandu – Affordable & Trusted",
  shortName: "Painting Service Nepal",
  phone: "+977 9700590228",
  phoneRaw: "+9779700590228",
  whatsapp: "9779700590228",
  email: "paintingservicenepal@gmail.com",
  address: "Kalanki, Kathmandu, Nepal",
  city: "Kathmandu",
  country: "Nepal",
} as const;

export const whatsappLink = (msg = "Hi, I'd like a free painting quote.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const PRICING = [
  {
    tier: "Basic",
    pricePerSqft: 3.5,
    description: "Single-coat refresh on existing painted walls.",
    features: ["1 coat premium emulsion", "Surface dusting", "Basic masking", "5-day finish"],
    accent: false,
  },
  {
    tier: "Standard",
    pricePerSqft: 7,
    description: "Most popular plan for homes and apartments.",
    features: [
      "Putty + primer + 2 coats",
      "Wall crack filling",
      "Furniture covering",
      "Asian Paints / Berger / Dulux options",
    ],
    accent: true,
  },
  {
    tier: "Premium",
    pricePerSqft: 21,
    description: "Luxury finish for villas, offices and showrooms.",
    features: [
      "Royale / Luxury finish",
      "Texture & design accent walls",
      "Anti-fungal + washable",
      "10-year master painter team",
    ],
    accent: false,
  },
] as const;

export const NEPAL_PALETTE: { name: string; hex: string }[] = [
  { name: "Himalayan White", hex: "#F4F1EA" },
  { name: "Annapurna Mist", hex: "#D9E2EC" },
  { name: "Kathmandu Cream", hex: "#EFE3CB" },
  { name: "Bagmati Blue", hex: "#3B6E8F" },
  { name: "Royal Indigo", hex: "#2A3D66" },
  { name: "Terracotta", hex: "#C4623B" },
  { name: "Saffron", hex: "#E8A33D" },
  { name: "Lumbini Sage", hex: "#9CB29A" },
  { name: "Sunset Coral", hex: "#E97A5A" },
  { name: "Charcoal Slate", hex: "#3C4147" },
  { name: "Pearl Grey", hex: "#C9CDD2" },
  { name: "Forest Pine", hex: "#3F5E48" },
];

export const ROOM_TYPES = [
  "Bedroom",
  "Living Room",
  "Kitchen",
  "Office",
  "Exterior House",
] as const;

export const FINISHES = ["Matte", "Satin", "Gloss", "Luxury Texture"] as const;

export const LIGHTING = ["Morning", "Afternoon", "Evening", "Night"] as const;
