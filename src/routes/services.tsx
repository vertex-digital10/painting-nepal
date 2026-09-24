import { createFileRoute, Link } from "@tanstack/react-router";
import { Brush, Building2, Droplets, Home, Layers, PaintBucket, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/UI/button";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Painting Services in Kathmandu | Interior, Exterior, Texture" },
      { name: "description", content: "Interior, exterior, texture, waterproofing, wood polishing, commercial painting in Kathmandu. Free quote, premium brands, expert painters." },
      { property: "og:title", content: "Painting Services in Kathmandu" },
      { property: "og:description", content: "Complete painting services across Kathmandu Valley." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Home, title: "Interior Wall Painting", desc: "Premium emulsion finish for bedrooms, halls, kitchens.", bullets: ["Wall putty + 2 coats", "Furniture covering", "Asian Paints / Berger / Dulux", "5-day average for 2BHK"] },
  { icon: Building2, title: "Exterior Wall Painting", desc: "Weather-shield coatings for monsoon and harsh sun.", bullets: ["Apex / Weather Coat brands", "Crack filling + primer", "7-year color durability", "Anti-fungal protection"] },
  { icon: Droplets, title: "Waterproofing", desc: "Roof, terrace, basement, bathroom waterproofing.", bullets: ["Dr. Fixit / Berger systems", "Heat-reflective coatings", "Multi-layer membrane", "Written warranty"] },
  { icon: Layers, title: "Texture Painting", desc: "Royale Play, stucco, metallic, sand textures.", bullets: ["Accent walls", "Stenciled designs", "Metallic finishes", "Custom pattern work"] },
  { icon: PaintBucket, title: "Wood Polishing", desc: "Doors, windows, furniture, staircases.", bullets: ["Melamine / PU polish", "Scratch resistant", "Glossy / matte options", "Color matching"] },
  { icon: Brush, title: "Commercial Painting", desc: "Offices, showrooms, restaurants, schools.", bullets: ["Night & weekend work", "Minimal downtime", "Branded color matching", "Volume discounts"] },
];

function ServicesPage() {
  return (
    <>
      <section className="gradient-hero">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Services</span>
          <h1 className="mt-2 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Complete painting services across Kathmandu
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From a single accent wall to a full villa repaint — pick the service you need and
            we'll handle the rest, end to end.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-elegant">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-foreground">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {b}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-5 w-full gradient-primary text-primary-foreground">
                <Link to="/contact">Request quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Tell us about your space
            </h2>
            <p className="mt-3 text-muted-foreground">
              Share a few details and we'll get back with a written estimate and timeline within 30 minutes.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
            <LeadForm source="services_page" compact />
          </div>
        </div>
      </section>
    </>
  );
}

