import { l as Button } from "./router-CouuoSF9.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/gallery.tsx?tsr-split=component
var CATEGORIES = [
	"All",
	"House Painting",
	"Luxury Villa",
	"Apartment",
	"Office",
	"Waterproofing",
	"Texture Painting"
];
var SHOTS = [
	{
		src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80",
		cat: "Luxury Villa",
		h: "h-80"
	},
	{
		src: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=900&q=80",
		cat: "House Painting",
		h: "h-96"
	},
	{
		src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80",
		cat: "Apartment",
		h: "h-72"
	},
	{
		src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
		cat: "House Painting",
		h: "h-80"
	},
	{
		src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&q=80",
		cat: "Office",
		h: "h-96"
	},
	{
		src: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=900&q=80",
		cat: "Texture Painting",
		h: "h-72"
	},
	{
		src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80",
		cat: "Luxury Villa",
		h: "h-80"
	},
	{
		src: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=900&q=80",
		cat: "Apartment",
		h: "h-72"
	},
	{
		src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
		cat: "House Painting",
		h: "h-96"
	}
];
function GalleryPage() {
	return /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold uppercase tracking-widest text-accent",
						children: "Gallery"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl",
						children: "Our recent work in Kathmandu"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-3 max-w-2xl text-muted-foreground",
						children: "Hover for details. Want to see a similar finish in your home?"
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-8 flex flex-wrap justify-center gap-2",
				children: CATEGORIES.map((c) => /* @__PURE__ */ jsx("span", {
					className: "rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground/80",
					children: c
				}, c))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5",
				children: SHOTS.map((g, i) => /* @__PURE__ */ jsxs("figure", {
					className: "group relative overflow-hidden rounded-3xl shadow-card transition hover:shadow-elegant",
					children: [/* @__PURE__ */ jsx("img", {
						src: g.src,
						alt: g.cat,
						className: `${g.h} w-full object-cover transition duration-500 group-hover:scale-105`,
						loading: "lazy"
					}), /* @__PURE__ */ jsx("figcaption", {
						className: "absolute inset-x-3 bottom-3 rounded-xl glass-strong px-3 py-2 text-xs font-semibold text-foreground opacity-0 transition group-hover:opacity-100",
						children: g.cat
					})]
				}, i))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-12 text-center",
				children: /* @__PURE__ */ jsx(Button, {
					asChild: true,
					size: "lg",
					className: "gradient-accent text-accent-foreground",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						children: "Get a similar finish — Free Quote"
					})
				})
			})
		]
	});
}
//#endregion
export { GalleryPage as component };
