import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Brush,
  ShieldCheck,
  Sparkles,
  Leaf,
  Wallet,
  Clock,
  Star,
  CheckCircle2,
  PaintBucket,
  Home,
  Building2,
  Droplets,
  Layers,
  Hammer,
  ArrowRight,
  Phone,
  MessageCircle,
  Palette,
} from "lucide-react";
import { Button } from "@/components/UI/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";

import { LeadForm } from "@/components/site/LeadForm";
import { SITE, whatsappLink, PRICING } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Painting Service Nepal – Best Wall Painters in Kathmandu" },
      {
        name: "description",
        content:
          "Affordable & trusted painting services in Kathmandu. Interior, exterior, texture, waterproofing. 4.8★, 800+ projects. Free quote + virtual room painter.",
      },
      { property: "og:title", content: "Painting Service Nepal – Best Wall Painters in Kathmandu" },
      {
        property: "og:description",
        content:
          "Affordable & trusted painting services in Kathmandu. Free quote + AI virtual room painter.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function Index() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <Services />
      <About />
      <VisualizerCTA />
      <Pricing />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <ContactBlock />
    </>
  );
}

function Hero() {
  return (
    <section className="paint-hero">
      <div className="paint-hero-copy">
        <p className="paint-eyebrow">A FRESH COAT. A FRESH FEELING.</p>
        <h1>
          A little colour.
          <br />A whole new
          <br />
          <em>feeling of home.</em>
        </h1>
        <p>
          Thoughtful painting for the spaces you live in. From your first colour choice to the final
          finishing touch, we bring care to every corner.
        </p>
        <div className="paint-hero-actions">
          <Link to="/contact" className="paint-primary">
            Let’s paint your space <ArrowRight size={17} />
          </Link>
          <Link to="/gallery" className="paint-link">
            Explore our work <ArrowRight size={17} />
          </Link>
        </div>
        <div className="paint-hero-location">
          <span /> YOUR LOCAL PAINTING TEAM · KATHMANDU VALLEY
        </div>
      </div>
      <div className="paint-hero-photo">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
          alt="Warm, sunlit living room with carefully finished neutral walls"
          fetchPriority="high"
        />
        <div className="paint-photo-label">
          <span>SPACES THAT FEEL LIKE YOU</span>
          <p>
            Beautiful walls.
            <br />
            Better everyday living.
          </p>
        </div>
        <div className="paint-swatches">
          <i style={{ background: "#e6ddcb" }} />
          <i style={{ background: "#a4aa93" }} />
          <i style={{ background: "#b46b50" }} />
          <i style={{ background: "#424e43" }} />
          <Link to="/visualizer" aria-label="Explore colours with the room visualizer">
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
function FeatureStrip() {
  const items = [
    { icon: Wallet, label: "Affordable Prices" },
    { icon: Hammer, label: "Expert Painters" },
    { icon: Clock, label: "Quick & Clean Service" },
    { icon: Leaf, label: "Eco-Friendly Paints" },
    { icon: ShieldCheck, label: "Free Site Quotes" },
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent">About Us</span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Your space deserves a thoughtful finish.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            We have highly skilled painters with over 10 years of experience delivering premium
            interior and exterior painting services across Nepal. From small flats in Patan to
            luxury villas in Bhaisepati — we treat every wall with the same craft.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { t: "Quick Work", d: "Tight deadlines respected" },
              { t: "Affordable Price", d: "Transparent per-sqft quotes" },
              { t: "Experienced Team", d: "10+ year master painters" },
              { t: "Professional Finish", d: "Brand-grade quality" },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-card p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <h3 className="font-display font-bold text-foreground">{f.t}</h3>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-6 gradient-primary text-primary-foreground">
            <Link to="/about">
              Read our story <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80"
              alt="Painter at work"
              className="aspect-[3/4] w-full rounded-3xl object-cover shadow-card"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1503594384566-461fe158e797?w=600&q=80"
              alt="Modern living room with fresh paint"
              className="mt-10 aspect-[3/4] w-full rounded-3xl object-cover shadow-card"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl glass-strong px-4 py-3 shadow-elegant">
            <div className="font-display text-2xl font-black text-foreground">10+ yrs</div>
            <div className="text-xs text-muted-foreground">In Kathmandu Valley</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Home,
    title: "Interior Wall Painting",
    desc: "Premium emulsion finish for bedrooms, living rooms, and kitchens.",
  },
  {
    icon: Building2,
    title: "Exterior Wall Painting",
    desc: "Weather-shield coatings that hold against monsoon and sun.",
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    desc: "Roof, terrace, and basement waterproofing with warranty.",
  },
  {
    icon: Layers,
    title: "Texture Painting",
    desc: "Royale Play, stucco, metallic — accent walls that wow.",
  },
  {
    icon: PaintBucket,
    title: "Wood Polishing",
    desc: "Furniture, doors, windows polished to factory finish.",
  },
  {
    icon: Brush,
    title: "Commercial Painting",
    desc: "Offices, showrooms, restaurants — minimal downtime.",
  },
];

function Services() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Our Services
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            End-to-end painting, done right
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            From a single accent wall to a full villa repaint — pick what you need.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-elegant">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <Link
                to="/services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisualizerCTA() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--accent) 50%, transparent), transparent 50%), radial-gradient(circle at 80% 80%, color-mix(in oklab, var(--primary-glow) 70%, transparent), transparent 50%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent-glow">
            EXPLORE YOUR PALETTE
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
            Find a colour that feels like you.
          </h2>
          <p className="mt-4 max-w-xl opacity-85">
            Step inside a 3D room, switch wall colors instantly, test matte vs gloss, and watch
            paint react to morning, afternoon, evening and night lighting — all before a single drop
            hits your wall.
          </p>
          <ul className="mt-6 grid gap-2 text-sm">
            {[
              "Live 3D room (rotate & zoom)",
              "Asian Paints / Dulux / Nepal palettes",
              "Matte • Satin • Gloss • Luxury finishes",
              "Instant per-sqft cost estimate",
            ].map((x) => (
              <li key={x} className="flex items-center gap-2 opacity-90">
                <CheckCircle2 className="h-4 w-4 text-accent-glow" /> {x}
              </li>
            ))}
          </ul>
          <Button
            asChild
            size="lg"
            className="mt-7 gradient-accent text-accent-foreground hover:opacity-90"
          >
            <Link to="/visualizer">
              Open Visualizer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="relative h-72 rounded-3xl glass-strong border-white/20 overflow-hidden shadow-elegant sm:h-96 lg:h-[28rem]">
          <img
            src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80"
            alt="Modern painted living room"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {["#3B6E8F", "#E97A5A", "#EFE3CB", "#3F5E48", "#E8A33D"].map((c) => (
              <div
                key={c}
                className="h-8 w-8 rounded-full border-2 border-white/70 shadow-card"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Transparent Pricing
        </span>
        <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Pay per square foot. No surprises.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PRICING.map((p) => (
          <div
            key={p.tier}
            className={`relative rounded-3xl border p-7 shadow-card transition hover:-translate-y-1 ${
              p.accent
                ? "gradient-primary text-primary-foreground border-transparent shadow-elegant"
                : "border-border bg-card"
            }`}
          >
            {p.accent && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                Most Popular
              </div>
            )}
            <div
              className={`font-display text-sm font-bold uppercase tracking-widest ${p.accent ? "opacity-80" : "text-accent"}`}
            >
              {p.tier}
            </div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-display text-4xl font-black">NPR {p.pricePerSqft}</span>
              <span className="text-sm opacity-70">/ sqft</span>
            </div>
            <p className={`mt-2 text-sm ${p.accent ? "opacity-85" : "text-muted-foreground"}`}>
              {p.description}
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2
                    className={`mt-0.5 h-4 w-4 ${p.accent ? "text-accent-glow" : "text-success"}`}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className={`mt-6 w-full ${p.accent ? "bg-accent text-accent-foreground hover:bg-accent/90" : "gradient-primary text-primary-foreground"}`}
            >
              <Link to="/contact">Get this plan</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    h: "h-72",
    t: "Luxury Villa",
  },
  {
    src: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
    h: "h-96",
    t: "Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    h: "h-80",
    t: "Apartment",
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    h: "h-72",
    t: "Living Room",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
    h: "h-96",
    t: "Office",
  },
  {
    src: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80",
    h: "h-80",
    t: "Texture Wall",
  },
];

function Gallery() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Colour & space inspiration
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            A little inspiration for your next chapter.
          </h2>
        </div>
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {GALLERY.map((g) => (
            <figure
              key={g.src}
              className={`group relative overflow-hidden rounded-3xl shadow-card transition hover:shadow-elegant`}
            >
              <img
                src={g.src}
                alt={g.t}
                className={`${g.h} w-full object-cover transition duration-500 group-hover:scale-105`}
                loading="lazy"
              />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-xl glass-strong px-3 py-2 text-xs font-semibold text-foreground opacity-100 transition">
                {g.t}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="border-2">
            <Link to="/gallery">View full gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Star, t: "10+ Years Experience", d: "Hundreds of repeat customers since 2014." },
    { icon: Hammer, t: "Skilled Painters", d: "In-house team — no random contractors." },
    { icon: Wallet, t: "Affordable Pricing", d: "Transparent per-sqft quotes, no hidden cost." },
    { icon: Sparkles, t: "Premium Materials", d: "Asian Paints, Berger, Dulux, Nerolac." },
    { icon: Clock, t: "Timely Delivery", d: "99% projects finished on or before deadline." },
    { icon: ShieldCheck, t: "Satisfaction Guarantee", d: "Free touch-ups within 30 days." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Why Choose Us
        </span>
        <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Why Kathmandu trusts us
        </h2>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.t} className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
              <i.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">{i.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Sushma R.",
    role: "Bhaisepati",
    rating: 5,
    text: "Repainted our 4-bedroom house in 6 days. Clean, friendly, and the texture wall is stunning.",
  },
  {
    name: "Bikash K.C.",
    role: "Lalitpur Office",
    rating: 5,
    text: "We needed a weekend job and they delivered. Walls look factory-fresh on Monday morning.",
  },
  {
    name: "Anita Maharjan",
    role: "New Baneshwor",
    rating: 5,
    text: "Best per-sqft pricing we got from 4 quotes. Used Asian Paints Royale exactly as agreed.",
  },
  {
    name: "Rohan Thapa",
    role: "Bhaktapur Villa",
    rating: 4.8,
    text: "The team handled exterior weatherproofing before monsoon. Zero leaks after heavy rain.",
  },
];

function Testimonials() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Testimonials
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Loved by 500+ families and businesses
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-foreground">"{r.text}"</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-sm font-bold text-primary-foreground">
                  {r.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "What painting services do you offer?",
    a: "Interior, exterior, texture, waterproofing, wood polishing, and commercial painting across Kathmandu Valley.",
  },
  {
    q: "How much does house painting cost in Kathmandu?",
    a: "Pricing starts at NPR 3.5 / sqft (Basic), NPR 7 / sqft (Standard), NPR 21 / sqft (Premium / Luxury). We give a free, transparent quote after a quick site visit.",
  },
  {
    q: "Which paint brands do you use?",
    a: "Asian Paints, Berger, Dulux, and Nerolac — including Royale, Apex, Weather Coat, and luxury texture ranges. You choose the brand and shade.",
  },
  {
    q: "How long does painting take?",
    a: "A typical 2BHK takes 4–6 days. Larger homes and villas 8–12 days. We commit to a deadline before starting.",
  },
  {
    q: "Can I visualize paint colors before painting?",
    a: "Yes — try our Virtual Room Painter to test colors, finishes, and lighting on a 3D room before booking.",
  },
];

function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">FAQ</span>
        <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Questions, answered
        </h2>
      </div>
      <Accordion type="single" collapsible className="mt-10">
        {FAQS.map((f, i) => (
          <AccordionItem
            key={i}
            value={`f${i}`}
            className="rounded-2xl border border-border bg-card px-5 mb-3"
          >
            <AccordionTrigger className="text-left font-display text-base font-bold text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function ContactBlock() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">
            Ready for a fresh coat?
          </h2>
          <p className="mt-4 max-w-md opacity-85">
            Request a free, no-obligation site visit. Most Kathmandu addresses are visited the same
            day.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-3 opacity-90 hover:opacity-100"
            >
              <Phone className="h-4 w-4 text-accent-glow" /> {SITE.phone}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 opacity-90 hover:opacity-100"
            >
              <MessageCircle className="h-4 w-4 text-accent-glow" /> WhatsApp instant chat
            </a>
            <div className="flex items-center gap-3 opacity-90">
              <Sparkles className="h-4 w-4 text-accent-glow" /> {SITE.address}
            </div>
          </div>
        </div>
        <div
          className="rounded-3xl glass-strong border-white/20 p-6 sm:p-8 text-foreground"
          style={{ background: "color-mix(in oklab, white 92%, transparent)" }}
        >
          <h3 className="font-display text-xl font-bold">Get your free quote</h3>
          <p className="mt-1 text-sm text-muted-foreground">We'll respond within 30 minutes.</p>
          <div className="mt-5">
            <LeadForm source="home_contact_block" compact />
          </div>
        </div>
      </div>
    </section>
  );
}
