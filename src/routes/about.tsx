import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Award, Users, Hammer, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Painting Service Nepal – Kathmandu Painters Since 2014" },
      { name: "description", content: "Master painters with 10+ years experience across Kathmandu Valley. 500+ happy customers, 800+ projects completed." },
      { property: "og:title", content: "About Painting Service Nepal" },
      { property: "og:description", content: "Kathmandu's trusted painting team since 2014." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="gradient-hero">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">About Us</span>
          <h1 className="mt-2 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Painters who treat your home like our own
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Painting Service Nepal started in Kalanki, Kathmandu in 2014 with one promise:
            honest pricing, premium paint, and a finish you can be proud of for years.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-black tracking-tight text-foreground">
            Are You Looking For Experienced Painters?
          </h2>
          <p className="mt-4 text-muted-foreground">
            We have highly skilled painters with over 10 years of experience delivering premium
            interior and exterior painting services across Nepal. Every project — whether a 1-room
            apartment or a 5,000 sqft villa — is led by a master painter who's been with us since
            the beginning.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Direct in-house painters (no random subcontractors)",
              "Asian Paints, Berger, Dulux, Nerolac partners",
              "Written warranty on every finished project",
              "Free site visit anywhere in Kathmandu Valley",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-success" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&q=80" alt="Painting team at work" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant" loading="lazy" />
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { i: Award, k: "10+", v: "Years of experience" },
            { i: Users, k: "500+", v: "Happy customers" },
            { i: Hammer, k: "800+", v: "Projects completed" },
            { i: Heart, k: "99%", v: "Would recommend us" },
          ].map((s) => (
            <div key={s.v} className="rounded-3xl border border-border bg-card p-7 text-center shadow-card">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl gradient-accent text-accent-foreground">
                <s.i className="h-6 w-6" />
              </div>
              <div className="mt-4 font-display text-3xl font-black text-foreground">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
