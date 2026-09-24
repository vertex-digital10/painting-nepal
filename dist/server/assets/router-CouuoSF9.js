import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import { t as supabase } from "./client-BQsdC6_a.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, redirect, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Facebook, Instagram, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Toaster } from "sonner";
//#region src/styles.css?url
var styles_default = "/assets/styles-Cyji5udE.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/UI/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/lib/site-config.ts
var SITE = {
	name: "Painting Service Nepal",
	tagline: "Best Wall Painting Services in Kathmandu – Affordable & Trusted",
	shortName: "Painting Service Nepal",
	phone: "+977 9700590228",
	phoneRaw: "+9779700590228",
	whatsapp: "9779700590228",
	email: "paintingservicenepal@gmail.com",
	address: "Kalanki, Kathmandu, Nepal",
	city: "Kathmandu",
	country: "Nepal"
};
var whatsappLink = (msg = "Hi, I'd like a free painting quote.") => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
var PRICING = [
	{
		tier: "Basic",
		pricePerSqft: 3.5,
		description: "Single-coat refresh on existing painted walls.",
		features: [
			"1 coat premium emulsion",
			"Surface dusting",
			"Basic masking",
			"5-day finish"
		],
		accent: false
	},
	{
		tier: "Standard",
		pricePerSqft: 7,
		description: "Most popular plan for homes and apartments.",
		features: [
			"Putty + primer + 2 coats",
			"Wall crack filling",
			"Furniture covering",
			"Asian Paints / Berger / Dulux options"
		],
		accent: true
	},
	{
		tier: "Premium",
		pricePerSqft: 21,
		description: "Luxury finish for villas, offices and showrooms.",
		features: [
			"Royale / Luxury finish",
			"Texture & design accent walls",
			"Anti-fungal + washable",
			"10-year master painter team"
		],
		accent: false
	}
];
var NEPAL_PALETTE = [
	{
		name: "Himalayan White",
		hex: "#F4F1EA"
	},
	{
		name: "Annapurna Mist",
		hex: "#D9E2EC"
	},
	{
		name: "Kathmandu Cream",
		hex: "#EFE3CB"
	},
	{
		name: "Bagmati Blue",
		hex: "#3B6E8F"
	},
	{
		name: "Royal Indigo",
		hex: "#2A3D66"
	},
	{
		name: "Terracotta",
		hex: "#C4623B"
	},
	{
		name: "Saffron",
		hex: "#E8A33D"
	},
	{
		name: "Lumbini Sage",
		hex: "#9CB29A"
	},
	{
		name: "Sunset Coral",
		hex: "#E97A5A"
	},
	{
		name: "Charcoal Slate",
		hex: "#3C4147"
	},
	{
		name: "Pearl Grey",
		hex: "#C9CDD2"
	},
	{
		name: "Forest Pine",
		hex: "#3F5E48"
	}
];
var ROOM_TYPES = [
	"Bedroom",
	"Living Room",
	"Kitchen",
	"Office",
	"Exterior House"
];
var FINISHES = [
	"Matte",
	"Satin",
	"Gloss",
	"Luxury Texture"
];
var LIGHTING = [
	"Morning",
	"Afternoon",
	"Evening",
	"Night"
];
//#endregion
//#region src/components/site/Navbar.tsx
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/visualizer",
		label: "Visualizer"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "glass-strong shadow-card" : "bg-transparent"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2.5 min-w-0",
					children: [/* @__PURE__ */ jsx("div", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary shadow-elegant",
						children: /* @__PURE__ */ jsx("span", {
							className: "font-display text-lg font-black text-primary-foreground",
							children: "P"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0 leading-tight",
						children: [/* @__PURE__ */ jsx("div", {
							className: "truncate font-display text-sm font-black tracking-tight text-foreground sm:text-base",
							children: "Painting Service Nepal"
						}), /* @__PURE__ */ jsx("div", {
							className: "hidden truncate text-[11px] text-muted-foreground sm:block",
							children: "Kathmandu • Since 2014"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: NAV.map((item) => /* @__PURE__ */ jsx(Link, {
						to: item.to,
						className: "rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-foreground",
						activeProps: { className: "bg-secondary text-foreground" },
						activeOptions: { exact: item.to === "/" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: `tel:${SITE.phoneRaw}`,
							className: "hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-foreground transition hover:bg-secondary md:inline-flex",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5 text-accent" }), SITE.phone]
						}),
						/* @__PURE__ */ jsx(Button, {
							asChild: true,
							size: "sm",
							className: "hidden gradient-accent text-accent-foreground hover:opacity-90 md:inline-flex",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								children: "Free Quote"
							})
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setOpen((v) => !v),
							className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-card lg:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							"aria-controls": "painting-mobile-nav",
							children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "border-t border-border bg-background/95 backdrop-blur-xl lg:hidden",
			children: /* @__PURE__ */ jsxs("nav", {
				id: "painting-mobile-nav",
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4",
				children: [NAV.map((item) => /* @__PURE__ */ jsx(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary",
					activeProps: { className: "bg-secondary text-foreground" },
					activeOptions: { exact: item.to === "/" },
					children: item.label
				}, item.to)), /* @__PURE__ */ jsxs("a", {
					href: `tel:${SITE.phoneRaw}`,
					className: "mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm",
					children: [
						/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-accent" }),
						" ",
						SITE.phone
					]
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t border-border bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "grid h-10 w-10 place-items-center rounded-xl gradient-accent",
						children: /* @__PURE__ */ jsx("span", {
							className: "font-display text-lg font-black text-accent-foreground",
							children: "P"
						})
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "font-display text-base font-black",
						children: "Painting Service Nepal"
					}), /* @__PURE__ */ jsx("div", {
						className: "text-xs opacity-70",
						children: "Trusted painters of Kathmandu"
					})] })]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-sm opacity-80",
					children: "Premium interior, exterior, texture and waterproofing painting services across Kathmandu Valley with 10+ years of master-painter experience."
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "font-display text-sm font-bold uppercase tracking-wider opacity-90",
					children: "Quick Links"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm opacity-80",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "hover:opacity-100 hover:underline",
							children: "Home"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/services",
							className: "hover:opacity-100 hover:underline",
							children: "Services"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/visualizer",
							className: "hover:opacity-100 hover:underline",
							children: "Virtual Room Painter"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/gallery",
							className: "hover:opacity-100 hover:underline",
							children: "Project Gallery"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "hover:opacity-100 hover:underline",
							children: "About"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "hover:opacity-100 hover:underline",
							children: "Contact"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "font-display text-sm font-bold uppercase tracking-wider opacity-90",
					children: "Services"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm opacity-80",
					children: [
						/* @__PURE__ */ jsx("li", { children: "Interior Wall Painting" }),
						/* @__PURE__ */ jsx("li", { children: "Exterior Wall Painting" }),
						/* @__PURE__ */ jsx("li", { children: "Waterproofing" }),
						/* @__PURE__ */ jsx("li", { children: "Texture Painting" }),
						/* @__PURE__ */ jsx("li", { children: "Wood Polishing" }),
						/* @__PURE__ */ jsx("li", { children: "Commercial Painting" })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("h4", {
						className: "font-display text-sm font-bold uppercase tracking-wider opacity-90",
						children: "Contact"
					}),
					/* @__PURE__ */ jsxs("ul", {
						className: "mt-4 space-y-3 text-sm opacity-90",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), SITE.address]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ jsx("a", {
									href: `tel:${SITE.phoneRaw}`,
									className: "hover:underline",
									children: SITE.phone
								})]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ jsx("a", {
									href: `mailto:${SITE.email}`,
									className: "hover:underline break-all",
									children: SITE.email
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-5 flex gap-2",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: whatsappLink(),
								target: "_blank",
								rel: "noreferrer",
								className: "grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-accent",
								children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#",
								className: "grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-accent",
								children: /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#",
								className: "grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-accent",
								children: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" })
							})
						]
					})
				] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs opacity-70 sm:flex-row sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Painting Service Nepal. All rights reserved."
				] }), /* @__PURE__ */ jsx("p", { children: "Disclaimer: Color previews are for visualization. Final on-wall color may vary with lighting and surface." })]
			})
		})]
	});
}
//#endregion
//#region src/components/site/FloatingActions.tsx
function FloatingActions() {
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6",
		children: [/* @__PURE__ */ jsx("a", {
			href: `tel:${SITE.phoneRaw}`,
			"aria-label": "Call now",
			className: "grid h-13 w-13 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition hover:scale-105 sm:h-14 sm:w-14",
			style: {
				height: 52,
				width: 52
			},
			children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" })
		}), /* @__PURE__ */ jsxs("a", {
			href: whatsappLink(),
			target: "_blank",
			rel: "noreferrer",
			"aria-label": "Chat on WhatsApp",
			className: "relative grid place-items-center rounded-full shadow-elegant transition hover:scale-105",
			style: {
				height: 56,
				width: 56,
				backgroundColor: "#25D366",
				color: "white"
			},
			children: [/* @__PURE__ */ jsx("span", {
				className: "absolute inset-0 animate-ping rounded-full opacity-40",
				style: { backgroundColor: "#25D366" }
			}), /* @__PURE__ */ jsx(MessageCircle, { className: "relative h-6 w-6" })]
		})]
	});
}
//#endregion
//#region src/components/UI/sonner.tsx
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ jsx(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-7xl font-black text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing or go back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var jsonLd = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: SITE.name,
	image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200",
	"@id": "https://paintingservicenepal.lovable.app",
	url: "/",
	telephone: SITE.phone,
	email: SITE.email,
	priceRange: "NPR 3.5 – 21 / sqft",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Kalanki",
		addressLocality: "Kathmandu",
		addressCountry: "NP"
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 27.6939,
		longitude: 85.2806
	},
	areaServed: "Kathmandu Valley",
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "4.8",
		reviewCount: "500"
	}
};
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Painting Service Nepal – Best Wall Painters in Kathmandu" },
			{
				name: "description",
				content: "Affordable & trusted interior, exterior, texture and waterproofing painting services in Kathmandu. Free quotes, virtual room painter, 800+ projects done."
			},
			{
				name: "keywords",
				content: "Painting Service Kathmandu, House Painting Nepal, Wall Painting Kathmandu, Interior Painting Nepal, Exterior Painting Nepal"
			},
			{
				name: "author",
				content: SITE.name
			},
			{
				name: "theme-color",
				content: "#2A3D66"
			},
			{
				property: "og:title",
				content: "Painting Service Nepal – Best Wall Painters in Kathmandu"
			},
			{
				property: "og:description",
				content: "Affordable & trusted interior, exterior, texture and waterproofing painting services in Kathmandu. Free quotes, virtual room painter, 800+ projects done."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: SITE.name
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Painting Service Nepal – Best Wall Painters in Kathmandu"
			},
			{
				name: "twitter:description",
				content: "Affordable & trusted interior, exterior, texture and waterproofing painting services in Kathmandu. Free quotes, virtual room painter, 800+ projects done."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cc864707-fdb2-49eb-824e-0839f59009a4/id-preview-8190f56e--973a16d1-4839-4463-9c03-d8147b92d837.lovable.app-1782319425603.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cc864707-fdb2-49eb-824e-0839f59009a4/id-preview-8190f56e--973a16d1-4839-4463-9c03-d8147b92d837.lovable.app-1782319425603.png"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(jsonLd)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen flex-col bg-background",
			children: [
				/* @__PURE__ */ jsx(Navbar, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1 pt-20",
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(Footer, {}),
				/* @__PURE__ */ jsx(FloatingActions, {}),
				/* @__PURE__ */ jsx(Toaster$1, {})
			]
		})
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$8 = () => import("./routes-57KEdROe.js");
var Route$9 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Painting Service Nepal – Best Wall Painters in Kathmandu" },
			{
				name: "description",
				content: "Affordable & trusted painting services in Kathmandu. Interior, exterior, texture, waterproofing. 4.8★, 800+ projects. Free quote + virtual room painter."
			},
			{
				property: "og:title",
				content: "Painting Service Nepal – Best Wall Painters in Kathmandu"
			},
			{
				property: "og:description",
				content: "Affordable & trusted painting services in Kathmandu. Free quote + AI virtual room painter."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/_authenticated/route.tsx
var $$splitComponentImporter$7 = () => import("./route-Di7iQBCH.js");
var Route$8 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$6 = () => import("./about-YMIPYITg.js");
var Route$7 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Us | Painting Service Nepal – Kathmandu Painters Since 2014" },
			{
				name: "description",
				content: "Master painters with 10+ years experience across Kathmandu Valley. 500+ happy customers, 800+ projects completed."
			},
			{
				property: "og:title",
				content: "About Painting Service Nepal"
			},
			{
				property: "og:description",
				content: "Kathmandu's trusted painting team since 2014."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/auth.tsx
var $$splitComponentImporter$5 = () => import("./auth-aPnnSaPN.js");
var Route$6 = createFileRoute("/auth")({
	head: () => ({ meta: [
		{ title: "Admin Sign In | Painting Service Nepal" },
		{
			name: "description",
			content: "Staff sign in for Painting Service Nepal admin dashboard."
		},
		{
			name: "robots",
			content: "noindex,nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$4 = () => import("./contact-DoCIB4nF.js");
var Route$5 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Painting Service Nepal – Kathmandu" },
			{
				name: "description",
				content: "Get a free painting quote in Kathmandu. Call, WhatsApp or fill the form — we respond within 30 minutes."
			},
			{
				property: "og:title",
				content: "Contact Painting Service Nepal"
			},
			{
				property: "og:description",
				content: "Free quote, free site visit anywhere in Kathmandu Valley."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/gallery.tsx
var $$splitComponentImporter$3 = () => import("./gallery-boV3FdGW.js");
var Route$4 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Project Gallery | Painting Service Nepal" },
			{
				name: "description",
				content: "800+ painted homes, offices and villas across Kathmandu Valley. Browse before/after photos."
			},
			{
				property: "og:title",
				content: "Painting Project Gallery – Kathmandu"
			},
			{
				property: "og:description",
				content: "Real Kathmandu painting projects by Painting Service Nepal."
			},
			{
				property: "og:url",
				content: "/gallery"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/services.tsx
var $$splitComponentImporter$2 = () => import("./services-BN4PAVWg.js");
var Route$3 = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Painting Services in Kathmandu | Interior, Exterior, Texture" },
			{
				name: "description",
				content: "Interior, exterior, texture, waterproofing, wood polishing, commercial painting in Kathmandu. Free quote, premium brands, expert painters."
			},
			{
				property: "og:title",
				content: "Painting Services in Kathmandu"
			},
			{
				property: "og:description",
				content: "Complete painting services across Kathmandu Valley."
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$2 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/services",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/visualizer",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/gallery",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.8"
			}
		].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/visualizer.tsx
var $$splitComponentImporter$1 = () => import("./visualizer-Cqj8d5Vn.js");
var Route$1 = createFileRoute("/visualizer")({
	head: () => ({
		meta: [
			{ title: "Virtual Room Painter | 3D Paint Visualizer – Kathmandu" },
			{
				name: "description",
				content: "Free 3D virtual room painter. Test wall colors, finishes and lighting before painting. Instant Kathmandu cost estimate."
			},
			{
				property: "og:title",
				content: "Virtual Room Painter – Painting Service Nepal"
			},
			{
				property: "og:description",
				content: "Paint your room in 3D before booking. Free instant cost estimate."
			},
			{
				property: "og:url",
				content: "/visualizer"
			}
		],
		links: [{
			rel: "canonical",
			href: "/visualizer"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.tsx
var $$splitComponentImporter = () => import("./admin-Da6RWQI1.js");
var Route = createFileRoute("/_authenticated/admin")({
	head: () => ({ meta: [{ title: "Admin – Painting Service Nepal" }, {
		name: "robots",
		content: "noindex,nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var IndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var AuthenticatedRouteRoute = Route$8.update({
	id: "/_authenticated",
	getParentRoute: () => Route$10
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$10
});
var AuthRoute = Route$6.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$10
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$10
});
var GalleryRoute = Route$4.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$10
});
var ServicesRoute = Route$3.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$10
});
var SitemapDotxmlRoute = Route$2.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$10
});
var VisualizerRoute = Route$1.update({
	id: "/visualizer",
	path: "/visualizer",
	getParentRoute: () => Route$10
});
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminRoute: Route.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AboutRoute,
	AuthRoute,
	ContactRoute,
	GalleryRoute,
	ServicesRoute,
	SitemapDotxmlRoute,
	VisualizerRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { PRICING as a, whatsappLink as c, getRouter, NEPAL_PALETTE as i, Button as l, FINISHES as n, ROOM_TYPES as o, LIGHTING as r, SITE as s, router_exports as t, cn as u };
