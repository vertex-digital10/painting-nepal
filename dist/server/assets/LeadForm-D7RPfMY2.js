import { a as useServerFn, r as submitLead } from "./leads.functions-DJVuLnn5.js";
import { l as Button, u as cn } from "./router-CouuoSF9.js";
import { n as Input, t as Label } from "./label-Xvu8-uFf.js";
import * as React from "react";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//#region src/components/UI/textarea.tsx
var Textarea = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
//#endregion
//#region src/components/site/LeadForm.tsx
var Schema = z.object({
	full_name: z.string().trim().min(2, "Please enter your name").max(120),
	phone: z.string().trim().min(7, "Enter a valid phone").max(40),
	email: z.string().trim().email("Invalid email").max(200).optional().or(z.literal("")),
	location: z.string().trim().max(200).optional().or(z.literal("")),
	service_type: z.string().trim().max(100).optional().or(z.literal("")),
	message: z.string().trim().max(2e3).optional().or(z.literal(""))
});
function LeadForm({ source = "contact_form", extra, defaultService, compact = false }) {
	const submit = useServerFn(submitLead);
	const [done, setDone] = useState(false);
	const [error, setError] = useState(null);
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
		resolver: zodResolver(Schema),
		defaultValues: { service_type: defaultService ?? "" }
	});
	const onSubmit = async (data) => {
		setError(null);
		try {
			await submit({ data: {
				...data,
				source,
				...extra ?? {}
			} });
			setDone(true);
		} catch (e) {
			setError(e instanceof Error ? e.message : "Something went wrong.");
		}
	};
	if (done) return /* @__PURE__ */ jsxs("div", {
		className: "grid place-items-center rounded-2xl border border-success/30 bg-success/10 p-8 text-center",
		children: [
			/* @__PURE__ */ jsx(CheckCircle2, { className: "h-10 w-10 text-success" }),
			/* @__PURE__ */ jsx("h3", {
				className: "mt-3 font-display text-xl font-bold text-foreground",
				children: "Request received!"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Our team will call you within 30 minutes during business hours."
			})
		]
	});
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSubmit(onSubmit),
		className: "space-y-4",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "full_name",
							children: "Full Name *"
						}),
						/* @__PURE__ */ jsx(Input, {
							id: "full_name",
							placeholder: "Ram Bahadur",
							...register("full_name")
						}),
						errors.full_name && /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-xs text-destructive",
							children: errors.full_name.message
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "phone",
							children: "Phone *"
						}),
						/* @__PURE__ */ jsx(Input, {
							id: "phone",
							placeholder: "98XXXXXXXX",
							...register("phone")
						}),
						errors.phone && /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-xs text-destructive",
							children: errors.phone.message
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "email",
							children: "Email"
						}),
						/* @__PURE__ */ jsx(Input, {
							id: "email",
							type: "email",
							placeholder: "you@example.com",
							...register("email")
						}),
						errors.email && /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-xs text-destructive",
							children: errors.email.message
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "location",
						children: "Location"
					}), /* @__PURE__ */ jsx(Input, {
						id: "location",
						placeholder: "Kalanki, Kathmandu",
						...register("location")
					})] }),
					/* @__PURE__ */ jsxs("div", {
						className: compact ? "" : "sm:col-span-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "service_type",
							children: "Service"
						}), /* @__PURE__ */ jsx(Input, {
							id: "service_type",
							placeholder: "Interior, Exterior, Texture...",
							...register("service_type")
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: compact ? "" : "sm:col-span-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "message",
							children: "Message"
						}), /* @__PURE__ */ jsx(Textarea, {
							id: "message",
							rows: 3,
							placeholder: "Tell us about your project (rooms, sqft, deadline)...",
							...register("message")
						})]
					})
				]
			}),
			error && /* @__PURE__ */ jsx("p", {
				className: "text-sm text-destructive",
				children: error
			}),
			/* @__PURE__ */ jsx(Button, {
				type: "submit",
				size: "lg",
				className: "w-full gradient-accent text-accent-foreground hover:opacity-90",
				disabled: isSubmitting,
				children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }), " Sending..."] }) : "Get My Free Quote"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-center text-xs text-muted-foreground",
				children: "Your info is private. We'll respond within 30 minutes (9 AM – 7 PM NPT)."
			})
		]
	});
}
//#endregion
export { LeadForm as t };
