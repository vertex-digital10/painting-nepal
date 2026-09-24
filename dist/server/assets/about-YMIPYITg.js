import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Award, CheckCircle2, Hammer, Heart, Users } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "gradient-hero",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold uppercase tracking-widest text-accent",
						children: "About Us"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl",
						children: "Painters who treat your home like our own"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
						children: "Painting Service Nepal started in Kalanki, Kathmandu in 2014 with one promise: honest pricing, premium paint, and a finish you can be proud of for years."
					})
				]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-black tracking-tight text-foreground",
					children: "Are You Looking For Experienced Painters?"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-muted-foreground",
					children: "We have highly skilled painters with over 10 years of experience delivering premium interior and exterior painting services across Nepal. Every project — whether a 1-room apartment or a 5,000 sqft villa — is led by a master painter who's been with us since the beginning."
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-6 space-y-3",
					children: [
						"Direct in-house painters (no random subcontractors)",
						"Asian Paints, Berger, Dulux, Nerolac partners",
						"Written warranty on every finished project",
						"Free site visit anywhere in Kathmandu Valley"
					].map((t) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-3 text-foreground/90",
						children: [
							/* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-5 w-5 text-success" }),
							" ",
							t
						]
					}, t))
				})
			] }), /* @__PURE__ */ jsx("img", {
				src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&q=80",
				alt: "Painting team at work",
				className: "aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant",
				loading: "lazy"
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-secondary/40",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8",
				children: [
					{
						i: Award,
						k: "10+",
						v: "Years of experience"
					},
					{
						i: Users,
						k: "500+",
						v: "Happy customers"
					},
					{
						i: Hammer,
						k: "800+",
						v: "Projects completed"
					},
					{
						i: Heart,
						k: "99%",
						v: "Would recommend us"
					}
				].map((s) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl border border-border bg-card p-7 text-center shadow-card",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mx-auto grid h-12 w-12 place-items-center rounded-2xl gradient-accent text-accent-foreground",
							children: /* @__PURE__ */ jsx(s.i, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 font-display text-3xl font-black text-foreground",
							children: s.k
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-1 text-sm text-muted-foreground",
							children: s.v
						})
					]
				}, s.v))
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
