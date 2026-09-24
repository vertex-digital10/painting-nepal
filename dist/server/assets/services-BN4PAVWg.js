import { l as Button } from "./router-CouuoSF9.js";
import { t as LeadForm } from "./LeadForm-D7RPfMY2.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Brush, Building2, CheckCircle2, Droplets, Home, Layers, PaintBucket } from "lucide-react";
//#region src/routes/services.tsx?tsr-split=component
var SERVICES = [
	{
		icon: Home,
		title: "Interior Wall Painting",
		desc: "Premium emulsion finish for bedrooms, halls, kitchens.",
		bullets: [
			"Wall putty + 2 coats",
			"Furniture covering",
			"Asian Paints / Berger / Dulux",
			"5-day average for 2BHK"
		]
	},
	{
		icon: Building2,
		title: "Exterior Wall Painting",
		desc: "Weather-shield coatings for monsoon and harsh sun.",
		bullets: [
			"Apex / Weather Coat brands",
			"Crack filling + primer",
			"7-year color durability",
			"Anti-fungal protection"
		]
	},
	{
		icon: Droplets,
		title: "Waterproofing",
		desc: "Roof, terrace, basement, bathroom waterproofing.",
		bullets: [
			"Dr. Fixit / Berger systems",
			"Heat-reflective coatings",
			"Multi-layer membrane",
			"Written warranty"
		]
	},
	{
		icon: Layers,
		title: "Texture Painting",
		desc: "Royale Play, stucco, metallic, sand textures.",
		bullets: [
			"Accent walls",
			"Stenciled designs",
			"Metallic finishes",
			"Custom pattern work"
		]
	},
	{
		icon: PaintBucket,
		title: "Wood Polishing",
		desc: "Doors, windows, furniture, staircases.",
		bullets: [
			"Melamine / PU polish",
			"Scratch resistant",
			"Glossy / matte options",
			"Color matching"
		]
	},
	{
		icon: Brush,
		title: "Commercial Painting",
		desc: "Offices, showrooms, restaurants, schools.",
		bullets: [
			"Night & weekend work",
			"Minimal downtime",
			"Branded color matching",
			"Volume discounts"
		]
	}
];
function ServicesPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "gradient-hero",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold uppercase tracking-widest text-accent",
						children: "Our Services"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl",
						children: "Complete painting services across Kathmandu"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
						children: "From a single accent wall to a full villa repaint — pick the service you need and we'll handle the rest, end to end."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: SERVICES.map((s) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elegant",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-elegant",
							children: /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-5 font-display text-xl font-bold text-foreground",
							children: s.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.desc
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-4 space-y-1.5 text-sm",
							children: s.bullets.map((b) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2 text-foreground/80",
								children: [
									/* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-4 w-4 shrink-0 text-success" }),
									" ",
									b
								]
							}, b))
						}),
						/* @__PURE__ */ jsx(Button, {
							asChild: true,
							className: "mt-5 w-full gradient-primary text-primary-foreground",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/contact",
								children: ["Request quote ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						})
					]
				}, s.title))
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-secondary/40",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl",
					children: "Tell us about your space"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-3 text-muted-foreground",
					children: "Share a few details and we'll get back with a written estimate and timeline within 30 minutes."
				})] }), /* @__PURE__ */ jsx("div", {
					className: "rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card",
					children: /* @__PURE__ */ jsx(LeadForm, {
						source: "services_page",
						compact: true
					})
				})]
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
