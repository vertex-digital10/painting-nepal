import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Toaster } from "@/components/UI/sonner";
import { SITE } from "@/lib/site-config";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-black text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing or go back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >Try again</button>
          <a href="/" className="rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground">Go home</a>
        </div>
      </div>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200",
  "@id": "https://paintingservicenepal.lovable.app",
  url: "/",
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "NPR 3.5 – 21 / sqft",
  address: { "@type": "PostalAddress", streetAddress: "Kalanki", addressLocality: "Kathmandu", addressCountry: "NP" },
  geo: { "@type": "GeoCoordinates", latitude: 27.6939, longitude: 85.2806 },
  areaServed: "Kathmandu Valley",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "500" },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Painting Service Nepal – Best Wall Painters in Kathmandu" },
      { name: "description", content: "Affordable & trusted interior, exterior, texture and waterproofing painting services in Kathmandu. Free quotes, virtual room painter, 800+ projects done." },
      { name: "keywords", content: "Painting Service Kathmandu, House Painting Nepal, Wall Painting Kathmandu, Interior Painting Nepal, Exterior Painting Nepal" },
      { name: "author", content: SITE.name },
      { name: "theme-color", content: "#2A3D66" },
      { property: "og:title", content: "Painting Service Nepal – Best Wall Painters in Kathmandu" },
      { property: "og:description", content: "Affordable & trusted interior, exterior, texture and waterproofing painting services in Kathmandu. Free quotes, virtual room painter, 800+ projects done." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Painting Service Nepal – Best Wall Painters in Kathmandu" },
      { name: "twitter:description", content: "Affordable & trusted interior, exterior, texture and waterproofing painting services in Kathmandu. Free quotes, virtual room painter, 800+ projects done." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cc864707-fdb2-49eb-824e-0839f59009a4/id-preview-8190f56e--973a16d1-4839-4463-9c03-d8147b92d837.lovable.app-1782319425603.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cc864707-fdb2-49eb-824e-0839f59009a4/id-preview-8190f56e--973a16d1-4839-4463-9c03-d8147b92d837.lovable.app-1782319425603.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex-1 pt-20">
          <Outlet />
        </main>
        <Footer />
        <FloatingActions />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}


