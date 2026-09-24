import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl gradient-accent">
              <span className="font-display text-lg font-black text-accent-foreground">P</span>
            </div>
            <div>
              <div className="font-display text-base font-black">Painting Service Nepal</div>
              <div className="text-xs opacity-70">Trusted painters of Kathmandu</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80">
            Premium interior, exterior, texture and waterproofing painting services across
            Kathmandu Valley with 10+ years of master-painter experience.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider opacity-90">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:opacity-100 hover:underline">Home</Link></li>
            <li><Link to="/services" className="hover:opacity-100 hover:underline">Services</Link></li>
            <li><Link to="/visualizer" className="hover:opacity-100 hover:underline">Virtual Room Painter</Link></li>
            <li><Link to="/gallery" className="hover:opacity-100 hover:underline">Project Gallery</Link></li>
            <li><Link to="/about" className="hover:opacity-100 hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider opacity-90">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>Interior Wall Painting</li>
            <li>Exterior Wall Painting</li>
            <li>Waterproofing</li>
            <li>Texture Painting</li>
            <li>Wood Polishing</li>
            <li>Commercial Painting</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider opacity-90">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {SITE.address}
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:underline">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${SITE.email}`} className="hover:underline break-all">{SITE.email}</a>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            <a href={whatsappLink()} target="_blank" rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-accent">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-accent">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-accent">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs opacity-70 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Painting Service Nepal. All rights reserved.</p>
          <p>
            Disclaimer: Color previews are for visualization. Final on-wall color may vary with
            lighting and surface.
          </p>
        </div>
      </div>
    </footer>
  );
}
