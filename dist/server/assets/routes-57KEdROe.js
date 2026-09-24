import { a as PRICING, c as whatsappLink, l as Button, s as SITE, u as cn } from "./router-CouuoSF9.js";
import { t as LeadForm } from "./LeadForm-D7RPfMY2.js";
import * as React from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Brush, Building2, CheckCircle2, ChevronDown, Clock, Droplets, Hammer, Home, Layers, Leaf, MessageCircle, PaintBucket, Phone, ShieldCheck, Sparkles, Star, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
//#region src/components/UI/accordion.tsx
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, {
	className: "flex",
	children: /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Content, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ jsx("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(FeatureStrip, {}),
		/* @__PURE__ */ jsx(Services, {}),
		/* @__PURE__ */ jsx(About, {}),
		/* @__PURE__ */ jsx(VisualizerCTA, {}),
		/* @__PURE__ */ jsx(Pricing, {}),
		/* @__PURE__ */ jsx(Gallery, {}),
		/* @__PURE__ */ jsx(WhyUs, {}),
		/* @__PURE__ */ jsx(Testimonials, {}),
		/* @__PURE__ */ jsx(FAQ, {}),
		/* @__PURE__ */ jsx(ContactBlock, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "paint-hero",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "paint-hero-copy",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "paint-eyebrow",
					children: "A FRESH COAT. A FRESH FEELING."
				}),
				/* @__PURE__ */ jsxs("h1", { children: [
					"A little colour.",
					/* @__PURE__ */ jsx("br", {}),
					"A whole new",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "feeling of home." })
				] }),
				/* @__PURE__ */ jsx("p", { children: "Thoughtful painting for the spaces you live in. From your first colour choice to the final finishing touch, we bring care to every corner." }),
				/* @__PURE__ */ jsxs("div", {
					className: "paint-hero-actions",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/contact",
						className: "paint-primary",
						children: ["Let’s paint your space ", /* @__PURE__ */ jsx(ArrowRight, { size: 17 })]
					}), /* @__PURE__ */ jsxs(Link, {
						to: "/gallery",
						className: "paint-link",
						children: ["Explore our work ", /* @__PURE__ */ jsx(ArrowRight, { size: 17 })]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "paint-hero-location",
					children: [/* @__PURE__ */ jsx("span", {}), " YOUR LOCAL PAINTING TEAM · KATHMANDU VALLEY"]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "paint-hero-photo",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
					alt: "Warm, sunlit living room with carefully finished neutral walls",
					fetchPriority: "high"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "paint-photo-label",
					children: [/* @__PURE__ */ jsx("span", { children: "SPACES THAT FEEL LIKE YOU" }), /* @__PURE__ */ jsxs("p", { children: [
						"Beautiful walls.",
						/* @__PURE__ */ jsx("br", {}),
						"Better everyday living."
					] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "paint-swatches",
					children: [
						/* @__PURE__ */ jsx("i", { style: { background: "#e6ddcb" } }),
						/* @__PURE__ */ jsx("i", { style: { background: "#a4aa93" } }),
						/* @__PURE__ */ jsx("i", { style: { background: "#b46b50" } }),
						/* @__PURE__ */ jsx("i", { style: { background: "#424e43" } }),
						/* @__PURE__ */ jsx(Link, {
							to: "/visualizer",
							"aria-label": "Explore colours with the room visualizer",
							children: /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
						})
					]
				})
			]
		})]
	});
}
function FeatureStrip() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-border bg-card",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8",
			children: [
				{
					icon: Wallet,
					label: "Affordable Prices"
				},
				{
					icon: Hammer,
					label: "Expert Painters"
				},
				{
					icon: Clock,
					label: "Quick & Clean Service"
				},
				{
					icon: Leaf,
					label: "Eco-Friendly Paints"
				},
				{
					icon: ShieldCheck,
					label: "Free Site Quotes"
				}
			].map(({ icon: Icon, label }) => /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent",
					children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ jsx("span", {
					className: "text-sm font-semibold text-foreground",
					children: label
				})]
			}, label))
		})
	});
}
function About() {
	return /* @__PURE__ */ jsx("section", {
		className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold uppercase tracking-widest text-accent",
						children: "About Us"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl",
						children: "Your space deserves a thoughtful finish."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-xl text-muted-foreground",
						children: "We have highly skilled painters with over 10 years of experience delivering premium interior and exterior painting services across Nepal. From small flats in Patan to luxury villas in Bhaisepati — we treat every wall with the same craft."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-6 grid grid-cols-2 gap-3",
						children: [
							{
								t: "Quick Work",
								d: "Tight deadlines respected"
							},
							{
								t: "Affordable Price",
								d: "Transparent per-sqft quotes"
							},
							{
								t: "Experienced Team",
								d: "10+ year master painters"
							},
							{
								t: "Professional Finish",
								d: "Brand-grade quality"
							}
						].map((f) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-2xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-success" }), /* @__PURE__ */ jsx("h3", {
									className: "font-display font-bold text-foreground",
									children: f.t
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: f.d
							})]
						}, f.t))
					}),
					/* @__PURE__ */ jsx(Button, {
						asChild: true,
						className: "mt-6 gradient-primary text-primary-foreground",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/about",
							children: ["Read our story ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					})
				]
			}), /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				className: "relative",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ jsx("img", {
						src: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80",
						alt: "Painter at work",
						className: "aspect-[3/4] w-full rounded-3xl object-cover shadow-card",
						loading: "lazy"
					}), /* @__PURE__ */ jsx("img", {
						src: "https://images.unsplash.com/photo-1503594384566-461fe158e797?w=600&q=80",
						alt: "Modern living room with fresh paint",
						className: "mt-10 aspect-[3/4] w-full rounded-3xl object-cover shadow-card",
						loading: "lazy"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "absolute -bottom-4 -left-4 rounded-2xl glass-strong px-4 py-3 shadow-elegant",
					children: [/* @__PURE__ */ jsx("div", {
						className: "font-display text-2xl font-black text-foreground",
						children: "10+ yrs"
					}), /* @__PURE__ */ jsx("div", {
						className: "text-xs text-muted-foreground",
						children: "In Kathmandu Valley"
					})]
				})]
			})]
		})
	});
}
var SERVICES = [
	{
		icon: Home,
		title: "Interior Wall Painting",
		desc: "Premium emulsion finish for bedrooms, living rooms, and kitchens."
	},
	{
		icon: Building2,
		title: "Exterior Wall Painting",
		desc: "Weather-shield coatings that hold against monsoon and sun."
	},
	{
		icon: Droplets,
		title: "Waterproofing",
		desc: "Roof, terrace, and basement waterproofing with warranty."
	},
	{
		icon: Layers,
		title: "Texture Painting",
		desc: "Royale Play, stucco, metallic — accent walls that wow."
	},
	{
		icon: PaintBucket,
		title: "Wood Polishing",
		desc: "Furniture, doors, windows polished to factory finish."
	},
	{
		icon: Brush,
		title: "Commercial Painting",
		desc: "Offices, showrooms, restaurants — minimal downtime."
	}
];
function Services() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-secondary/40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold uppercase tracking-widest text-accent",
						children: "Our Services"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl",
						children: "End-to-end painting, done right"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-3 max-w-2xl text-muted-foreground",
						children: "From a single accent wall to a full villa repaint — pick what you need."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: SERVICES.map((s, i) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .4,
						delay: i * .05
					},
					className: "group rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elegant",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-elegant",
							children: /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-5 font-display text-lg font-bold text-foreground",
							children: s.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.desc
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/services",
							className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all",
							children: ["Learn more ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
						})
					]
				}, s.title))
			})]
		})
	});
}
function VisualizerCTA() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 opacity-30",
			style: { backgroundImage: "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--accent) 50%, transparent), transparent 50%), radial-gradient(circle at 80% 80%, color-mix(in oklab, var(--primary-glow) 70%, transparent), transparent 50%)" }
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-accent-glow",
					children: "EXPLORE YOUR PALETTE"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl",
					children: "Find a colour that feels like you."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-xl opacity-85",
					children: "Step inside a 3D room, switch wall colors instantly, test matte vs gloss, and watch paint react to morning, afternoon, evening and night lighting — all before a single drop hits your wall."
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-6 grid gap-2 text-sm",
					children: [
						"Live 3D room (rotate & zoom)",
						"Asian Paints / Dulux / Nepal palettes",
						"Matte • Satin • Gloss • Luxury finishes",
						"Instant per-sqft cost estimate"
					].map((x) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-center gap-2 opacity-90",
						children: [
							/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-accent-glow" }),
							" ",
							x
						]
					}, x))
				}),
				/* @__PURE__ */ jsx(Button, {
					asChild: true,
					size: "lg",
					className: "mt-7 gradient-accent text-accent-foreground hover:opacity-90",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/visualizer",
						children: ["Open Visualizer ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
					})
				})
			] }), /* @__PURE__ */ jsxs("div", {
				className: "relative h-72 rounded-3xl glass-strong border-white/20 overflow-hidden shadow-elegant sm:h-96 lg:h-[28rem]",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80",
						alt: "Modern painted living room",
						className: "h-full w-full object-cover",
						loading: "lazy"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" }),
					/* @__PURE__ */ jsx("div", {
						className: "absolute bottom-4 left-4 right-4 flex flex-wrap gap-2",
						children: [
							"#3B6E8F",
							"#E97A5A",
							"#EFE3CB",
							"#3F5E48",
							"#E8A33D"
						].map((c) => /* @__PURE__ */ jsx("div", {
							className: "h-8 w-8 rounded-full border-2 border-white/70 shadow-card",
							style: { backgroundColor: c }
						}, c))
					})
				]
			})]
		})]
	});
}
function Pricing() {
	return /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "text-center",
			children: [/* @__PURE__ */ jsx("span", {
				className: "text-xs font-bold uppercase tracking-widest text-accent",
				children: "Transparent Pricing"
			}), /* @__PURE__ */ jsx("h2", {
				className: "mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl",
				children: "Pay per square foot. No surprises."
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-12 grid gap-6 md:grid-cols-3",
			children: PRICING.map((p) => /* @__PURE__ */ jsxs("div", {
				className: `relative rounded-3xl border p-7 shadow-card transition hover:-translate-y-1 ${p.accent ? "gradient-primary text-primary-foreground border-transparent shadow-elegant" : "border-border bg-card"}`,
				children: [
					p.accent && /* @__PURE__ */ jsx("div", {
						className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground",
						children: "Most Popular"
					}),
					/* @__PURE__ */ jsx("div", {
						className: `font-display text-sm font-bold uppercase tracking-widest ${p.accent ? "opacity-80" : "text-accent"}`,
						children: p.tier
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-3 flex items-baseline gap-1",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "font-display text-4xl font-black",
							children: ["NPR ", p.pricePerSqft]
						}), /* @__PURE__ */ jsx("span", {
							className: "text-sm opacity-70",
							children: "/ sqft"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: `mt-2 text-sm ${p.accent ? "opacity-85" : "text-muted-foreground"}`,
						children: p.description
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-5 space-y-2 text-sm",
						children: p.features.map((f) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsx(CheckCircle2, { className: `mt-0.5 h-4 w-4 ${p.accent ? "text-accent-glow" : "text-success"}` }), /* @__PURE__ */ jsx("span", { children: f })]
						}, f))
					}),
					/* @__PURE__ */ jsx(Button, {
						asChild: true,
						className: `mt-6 w-full ${p.accent ? "bg-accent text-accent-foreground hover:bg-accent/90" : "gradient-primary text-primary-foreground"}`,
						children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							children: "Get this plan"
						})
					})
				]
			}, p.tier))
		})]
	});
}
var GALLERY = [
	{
		src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
		h: "h-72",
		t: "Luxury Villa"
	},
	{
		src: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
		h: "h-96",
		t: "Bedroom"
	},
	{
		src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
		h: "h-80",
		t: "Apartment"
	},
	{
		src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
		h: "h-72",
		t: "Living Room"
	},
	{
		src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
		h: "h-96",
		t: "Office"
	},
	{
		src: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80",
		h: "h-80",
		t: "Texture Wall"
	}
];
function Gallery() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-secondary/40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold uppercase tracking-widest text-accent",
						children: "Colour & space inspiration"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl",
						children: "A little inspiration for your next chapter."
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5",
					children: GALLERY.map((g) => /* @__PURE__ */ jsxs("figure", {
						className: `group relative overflow-hidden rounded-3xl shadow-card transition hover:shadow-elegant`,
						children: [/* @__PURE__ */ jsx("img", {
							src: g.src,
							alt: g.t,
							className: `${g.h} w-full object-cover transition duration-500 group-hover:scale-105`,
							loading: "lazy"
						}), /* @__PURE__ */ jsx("figcaption", {
							className: "absolute inset-x-3 bottom-3 rounded-xl glass-strong px-3 py-2 text-xs font-semibold text-foreground opacity-100 transition",
							children: g.t
						})]
					}, g.src))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ jsx(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						className: "border-2",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/gallery",
							children: "View full gallery"
						})
					})
				})
			]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "text-center",
			children: [/* @__PURE__ */ jsx("span", {
				className: "text-xs font-bold uppercase tracking-widest text-accent",
				children: "Why Choose Us"
			}), /* @__PURE__ */ jsx("h2", {
				className: "mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl",
				children: "Why Kathmandu trusts us"
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					icon: Star,
					t: "10+ Years Experience",
					d: "Hundreds of repeat customers since 2014."
				},
				{
					icon: Hammer,
					t: "Skilled Painters",
					d: "In-house team — no random contractors."
				},
				{
					icon: Wallet,
					t: "Affordable Pricing",
					d: "Transparent per-sqft quotes, no hidden cost."
				},
				{
					icon: Sparkles,
					t: "Premium Materials",
					d: "Asian Paints, Berger, Dulux, Nerolac."
				},
				{
					icon: Clock,
					t: "Timely Delivery",
					d: "99% projects finished on or before deadline."
				},
				{
					icon: ShieldCheck,
					t: "Satisfaction Guarantee",
					d: "Free touch-ups within 30 days."
				}
			].map((i) => /* @__PURE__ */ jsxs("div", {
				className: "rounded-3xl border border-border bg-card p-6 shadow-card",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent",
						children: /* @__PURE__ */ jsx(i.icon, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-4 font-display text-lg font-bold text-foreground",
						children: i.t
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: i.d
					})
				]
			}, i.t))
		})]
	});
}
var REVIEWS = [
	{
		name: "Sushma R.",
		role: "Bhaisepati",
		rating: 5,
		text: "Repainted our 4-bedroom house in 6 days. Clean, friendly, and the texture wall is stunning."
	},
	{
		name: "Bikash K.C.",
		role: "Lalitpur Office",
		rating: 5,
		text: "We needed a weekend job and they delivered. Walls look factory-fresh on Monday morning."
	},
	{
		name: "Anita Maharjan",
		role: "New Baneshwor",
		rating: 5,
		text: "Best per-sqft pricing we got from 4 quotes. Used Asian Paints Royale exactly as agreed."
	},
	{
		name: "Rohan Thapa",
		role: "Bhaktapur Villa",
		rating: 4.8,
		text: "The team handled exterior weatherproofing before monsoon. Zero leaks after heavy rain."
	}
];
function Testimonials() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-secondary/40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-accent",
					children: "Testimonials"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl",
					children: "Loved by 500+ families and businesses"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: REVIEWS.map((r, i) => /* @__PURE__ */ jsxs(motion.figure, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .4,
						delay: i * .06
					},
					className: "rounded-3xl border border-border bg-card p-6 shadow-card",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex gap-0.5 text-accent",
							children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, k))
						}),
						/* @__PURE__ */ jsxs("blockquote", {
							className: "mt-3 text-sm text-foreground",
							children: [
								"\"",
								r.text,
								"\""
							]
						}),
						/* @__PURE__ */ jsxs("figcaption", {
							className: "mt-4 flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid h-10 w-10 place-items-center rounded-full gradient-primary text-sm font-bold text-primary-foreground",
								children: r.name.split(" ").map((p) => p[0]).join("")
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-sm font-semibold text-foreground",
								children: r.name
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground",
								children: r.role
							})] })]
						})
					]
				}, r.name))
			})]
		})
	});
}
var FAQS = [
	{
		q: "What painting services do you offer?",
		a: "Interior, exterior, texture, waterproofing, wood polishing, and commercial painting across Kathmandu Valley."
	},
	{
		q: "How much does house painting cost in Kathmandu?",
		a: "Pricing starts at NPR 3.5 / sqft (Basic), NPR 7 / sqft (Standard), NPR 21 / sqft (Premium / Luxury). We give a free, transparent quote after a quick site visit."
	},
	{
		q: "Which paint brands do you use?",
		a: "Asian Paints, Berger, Dulux, and Nerolac — including Royale, Apex, Weather Coat, and luxury texture ranges. You choose the brand and shade."
	},
	{
		q: "How long does painting take?",
		a: "A typical 2BHK takes 4–6 days. Larger homes and villas 8–12 days. We commit to a deadline before starting."
	},
	{
		q: "Can I visualize paint colors before painting?",
		a: "Yes — try our Virtual Room Painter to test colors, finishes, and lighting on a 3D room before booking."
	}
];
function FAQ() {
	return /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "text-center",
			children: [/* @__PURE__ */ jsx("span", {
				className: "text-xs font-bold uppercase tracking-widest text-accent",
				children: "FAQ"
			}), /* @__PURE__ */ jsx("h2", {
				className: "mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl",
				children: "Questions, answered"
			})]
		}), /* @__PURE__ */ jsx(Accordion, {
			type: "single",
			collapsible: true,
			className: "mt-10",
			children: FAQS.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, {
				value: `f${i}`,
				className: "rounded-2xl border border-border bg-card px-5 mb-3",
				children: [/* @__PURE__ */ jsx(AccordionTrigger, {
					className: "text-left font-display text-base font-bold text-foreground hover:no-underline",
					children: f.q
				}), /* @__PURE__ */ jsx(AccordionContent, {
					className: "text-sm text-muted-foreground",
					children: f.a
				})]
			}, i))
		})]
	});
}
function ContactBlock() {
	return /* @__PURE__ */ jsx("section", {
		className: "relative overflow-hidden bg-primary text-primary-foreground",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-black tracking-tight sm:text-4xl",
					children: "Ready for a fresh coat?"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-md opacity-85",
					children: "Request a free, no-obligation site visit. Most Kathmandu addresses are visited the same day."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: `tel:${SITE.phoneRaw}`,
							className: "flex items-center gap-3 opacity-90 hover:opacity-100",
							children: [
								/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-accent-glow" }),
								" ",
								SITE.phone
							]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: whatsappLink(),
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-3 opacity-90 hover:opacity-100",
							children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4 text-accent-glow" }), " WhatsApp instant chat"]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 opacity-90",
							children: [
								/* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-accent-glow" }),
								" ",
								SITE.address
							]
						})
					]
				})
			] }), /* @__PURE__ */ jsxs("div", {
				className: "rounded-3xl glass-strong border-white/20 p-6 sm:p-8 text-foreground",
				style: { background: "color-mix(in oklab, white 92%, transparent)" },
				children: [
					/* @__PURE__ */ jsx("h3", {
						className: "font-display text-xl font-bold",
						children: "Get your free quote"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "We'll respond within 30 minutes."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-5",
						children: /* @__PURE__ */ jsx(LeadForm, {
							source: "home_contact_block",
							compact: true
						})
					})
				]
			})]
		})
	});
}
//#endregion
export { Index as component };
