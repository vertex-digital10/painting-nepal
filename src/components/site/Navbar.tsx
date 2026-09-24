import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/UI/button";
import { SITE } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/visualizer", label: "Visualizer" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong shadow-card" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 min-w-0">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary shadow-elegant">
            <span className="font-display text-lg font-black text-primary-foreground">P</span>
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-sm font-black tracking-tight text-foreground sm:text-base">
              Painting Service Nepal
            </div>
            <div className="hidden truncate text-[11px] text-muted-foreground sm:block">
              Kathmandu • Since 2014
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-foreground transition hover:bg-secondary md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-accent" />
            {SITE.phone}
          </a>
          <Button asChild size="sm" className="hidden gradient-accent text-accent-foreground hover:opacity-90 md:inline-flex">
            <Link to="/contact">Free Quote</Link>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="painting-mobile-nav"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav id="painting-mobile-nav" className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm"
            >
              <Phone className="h-4 w-4 text-accent" /> {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}


