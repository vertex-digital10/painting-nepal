import { c as whatsappLink, l as Button, s as SITE } from "./router-CouuoSF9.js";
import { t as LeadForm } from "./LeadForm-D7RPfMY2.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs("section", {
		className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8",
		children: [/* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx("span", {
				className: "text-xs font-bold uppercase tracking-widest text-accent",
				children: "Get in touch"
			}),
			/* @__PURE__ */ jsx("h1", {
				className: "mt-2 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl",
				children: "Free quote in 30 minutes"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 text-muted-foreground",
				children: "Reach us any way you prefer — phone, WhatsApp, email, or the form."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-8 space-y-4",
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: `tel:${SITE.phoneRaw}`,
						className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:shadow-card",
						children: [/* @__PURE__ */ jsx("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent",
							children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Call us"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-0.5 font-display font-bold text-foreground",
							children: SITE.phone
						})] })]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: whatsappLink(),
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:shadow-card",
						children: [/* @__PURE__ */ jsx("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white",
							style: { backgroundColor: "#25D366" },
							children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "WhatsApp"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-0.5 font-display font-bold text-foreground",
							children: "Instant chat with our team"
						})] })]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: `mailto:${SITE.email}`,
						className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:shadow-card",
						children: [/* @__PURE__ */ jsx("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-0.5 truncate font-display font-bold text-foreground",
								children: SITE.email
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Office"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-0.5 font-display font-bold text-foreground",
								children: SITE.address
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }), " Sun – Fri, 9 AM – 7 PM NPT"]
							})
						] })]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-6 overflow-hidden rounded-2xl border border-border shadow-card",
				children: /* @__PURE__ */ jsx("iframe", {
					title: "Kalanki Kathmandu map",
					src: "https://www.google.com/maps?q=Kalanki+Kathmandu+Nepal&output=embed",
					width: "100%",
					height: "240",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade",
					className: "border-0"
				})
			})
		] }), /* @__PURE__ */ jsxs("div", {
			className: "rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-elegant",
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "font-display text-2xl font-black text-foreground",
					children: "Request a free quote"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Tell us about your space — we'll be back within 30 minutes."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(LeadForm, { source: "contact_page" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ jsx(Button, {
						asChild: true,
						variant: "outline",
						className: "border-2",
						children: /* @__PURE__ */ jsx("a", {
							href: `tel:${SITE.phoneRaw}`,
							children: "Call now"
						})
					}), /* @__PURE__ */ jsx(Button, {
						asChild: true,
						className: "gradient-accent text-accent-foreground",
						children: /* @__PURE__ */ jsx("a", {
							href: whatsappLink(),
							target: "_blank",
							rel: "noreferrer",
							children: "WhatsApp"
						})
					})]
				})
			]
		})]
	});
}
//#endregion
export { ContactPage as component };
