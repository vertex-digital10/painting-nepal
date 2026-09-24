import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/UI/button";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery | Painting Service Nepal" },
      { name: "description", content: "800+ painted homes, offices and villas across Kathmandu Valley. Browse before/after photos." },
      { property: "og:title", content: "Painting Project Gallery – Kathmandu" },
      { property: "og:description", content: "Real Kathmandu painting projects by Painting Service Nepal." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const CATEGORIES = ["All", "House Painting", "Luxury Villa", "Apartment", "Office", "Waterproofing", "Texture Painting"];

const SHOTS = [
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80", cat: "Luxury Villa", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=900&q=80", cat: "House Painting", h: "h-96" },
  { src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80", cat: "Apartment", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80", cat: "House Painting", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&q=80", cat: "Office", h: "h-96" },
  { src: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=900&q=80", cat: "Texture Painting", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80", cat: "Luxury Villa", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=900&q=80", cat: "Apartment", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", cat: "House Painting", h: "h-96" },
];

function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">Gallery</span>
        <h1 className="mt-2 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          Our recent work in Kathmandu
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Hover for details. Want to see a similar finish in your home?
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <span key={c} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground/80">{c}</span>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {SHOTS.map((g, i) => (
          <figure key={i} className="group relative overflow-hidden rounded-3xl shadow-card transition hover:shadow-elegant">
            <img src={g.src} alt={g.cat} className={`${g.h} w-full object-cover transition duration-500 group-hover:scale-105`} loading="lazy" />
            <figcaption className="absolute inset-x-3 bottom-3 rounded-xl glass-strong px-3 py-2 text-xs font-semibold text-foreground opacity-0 transition group-hover:opacity-100">
              {g.cat}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild size="lg" className="gradient-accent text-accent-foreground"><Link to="/contact">Get a similar finish — Free Quote</Link></Button>
      </div>
    </section>
  );
}

