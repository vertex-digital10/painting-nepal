import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/UI/button";
import { LeadForm } from "@/components/site/LeadForm";
import { SITE, whatsappLink } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Painting Service Nepal – Kathmandu" },
      { name: "description", content: "Get a free painting quote in Kathmandu. Call, WhatsApp or fill the form — we respond within 30 minutes." },
      { property: "og:title", content: "Contact Painting Service Nepal" },
      { property: "og:description", content: "Free quote, free site visit anywhere in Kathmandu Valley." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-accent">Get in touch</span>
        <h1 className="mt-2 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          Free quote in 30 minutes
        </h1>
        <p className="mt-3 text-muted-foreground">
          Reach us any way you prefer — phone, WhatsApp, email, or the form.
        </p>

        <div className="mt-8 space-y-4">
          <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:shadow-card">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent"><Phone className="h-5 w-5" /></div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Call us</div>
              <div className="mt-0.5 font-display font-bold text-foreground">{SITE.phone}</div>
            </div>
          </a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:shadow-card">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white" style={{ backgroundColor: "#25D366" }}><MessageCircle className="h-5 w-5" /></div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">WhatsApp</div>
              <div className="mt-0.5 font-display font-bold text-foreground">Instant chat with our team</div>
            </div>
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:shadow-card">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></div>
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
              <div className="mt-0.5 truncate font-display font-bold text-foreground">{SITE.email}</div>
            </div>
          </a>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Office</div>
              <div className="mt-0.5 font-display font-bold text-foreground">{SITE.address}</div>
              <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> Sun – Fri, 9 AM – 7 PM NPT
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-card">
          <iframe
            title="Kalanki Kathmandu map"
            src="https://www.google.com/maps?q=Kalanki+Kathmandu+Nepal&output=embed"
            width="100%"
            height="240"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-elegant">
        <h2 className="font-display text-2xl font-black text-foreground">Request a free quote</h2>
        <p className="mt-1 text-sm text-muted-foreground">Tell us about your space — we'll be back within 30 minutes.</p>
        <div className="mt-6">
          <LeadForm source="contact_page" />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button asChild variant="outline" className="border-2"><a href={`tel:${SITE.phoneRaw}`}>Call now</a></Button>
          <Button asChild className="gradient-accent text-accent-foreground"><a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp</a></Button>
        </div>
      </div>
    </section>
  );
}

