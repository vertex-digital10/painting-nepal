import { a as useServerFn, i as updateLeadStatus, n as listLeads, t as checkIsAdmin } from "./leads.functions-DJVuLnn5.js";
import { t as supabase } from "./client-BQsdC6_a.js";
import { c as whatsappLink, l as Button, u as cn } from "./router-CouuoSF9.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Check, ChevronDown, ChevronUp, Loader2, LogOut, Mail, MessageCircle, Phone, Shield, ShieldOff } from "lucide-react";
import { cva } from "class-variance-authority";
import { toast } from "sonner";
import * as SelectPrimitive from "@radix-ui/react-select";
//#region src/components/UI/table.tsx
var Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ jsx("table", {
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", {
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("tbody", {
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("tfoot", {
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("tr", {
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("th", {
	ref,
	className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("td", {
	ref,
	className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("caption", {
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
//#endregion
//#region src/components/UI/select.tsx
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SelectPrimitive.Trigger, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ jsx(SelectPrimitive.Icon, {
		asChild: true,
		children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.ScrollUpButton, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.ScrollDownButton, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(SelectPrimitive.Content, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
		/* @__PURE__ */ jsx(SelectPrimitive.Viewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ jsx(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Label, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SelectPrimitive.Item, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })]
}));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Separator, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
//#endregion
//#region src/components/UI/badge.tsx
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
//#region src/routes/_authenticated/admin.tsx?tsr-split=component
var STATUSES = [
	"new",
	"contacted",
	"quoted",
	"won",
	"lost"
];
var STATUS_COLORS = {
	new: "bg-primary/10 text-primary",
	contacted: "bg-accent/10 text-accent",
	quoted: "bg-chart-3/10 text-chart-3",
	won: "bg-success/10 text-success",
	lost: "bg-destructive/10 text-destructive"
};
function AdminPage() {
	const navigate = useNavigate();
	const qc = useQueryClient();
	const check = useServerFn(checkIsAdmin);
	const list = useServerFn(listLeads);
	const update = useServerFn(updateLeadStatus);
	const [adminState, setAdminState] = useState("loading");
	const [userId, setUserId] = useState(null);
	useEffect(() => {
		check({}).then((r) => {
			setAdminState(r.isAdmin ? "yes" : "no");
			setUserId(r.userId);
		}).catch(() => setAdminState("no"));
	}, [check]);
	const leads = useQuery({
		queryKey: ["admin", "leads"],
		queryFn: () => list({}),
		enabled: adminState === "yes",
		refetchInterval: 3e4
	});
	const signOut = async () => {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/auth",
			replace: true
		});
	};
	const setStatus = async (id, status) => {
		try {
			await update({ data: {
				id,
				status
			} });
			toast.success("Lead updated");
			qc.invalidateQueries({ queryKey: ["admin", "leads"] });
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Failed");
		}
	};
	if (adminState === "loading") return /* @__PURE__ */ jsx("div", {
		className: "mx-auto grid min-h-[60vh] max-w-md place-items-center px-4",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" })
	});
	if (adminState === "no") return /* @__PURE__ */ jsx("div", {
		className: "mx-auto max-w-xl px-4 py-16",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-3xl border border-border bg-card p-8 text-center shadow-card",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-destructive/10 text-destructive",
					children: /* @__PURE__ */ jsx(ShieldOff, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-4 font-display text-2xl font-black text-foreground",
					children: "Not authorized"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Your account is signed in but doesn't have the admin role yet."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4 rounded-xl bg-secondary/60 p-4 text-left text-xs text-muted-foreground",
					children: ["Ask a current admin to grant the role by running this SQL in Lovable Cloud:", /* @__PURE__ */ jsxs("pre", {
						className: "mt-2 overflow-x-auto rounded bg-background p-3 text-[11px] text-foreground",
						children: [
							"INSERT INTO public.user_roles (user_id, role) VALUES ('",
							userId ?? "<your-user-id>",
							"', 'admin');"
						]
					})]
				}),
				/* @__PURE__ */ jsxs(Button, {
					onClick: signOut,
					variant: "outline",
					className: "mt-6",
					children: [/* @__PURE__ */ jsx(LogOut, { className: "mr-2 h-4 w-4" }), " Sign out"]
				})
			]
		})
	});
	const data = leads.data ?? [];
	const stats = {
		total: data.length,
		new: data.filter((d) => d.status === "new").length,
		won: data.filter((d) => d.status === "won").length,
		estimatedValue: data.reduce((s, d) => s + (Number(d.estimated_cost_npr) || 0), 0)
	};
	return /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest",
							children: [/* @__PURE__ */ jsx(Shield, { className: "h-3.5 w-3.5" }), " Admin Dashboard"]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-1 font-display text-3xl font-black text-foreground",
							children: "Leads"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Inquiries from quote forms, visualizer, and contact page."
						})
					]
				}), /* @__PURE__ */ jsxs(Button, {
					onClick: signOut,
					variant: "outline",
					children: [/* @__PURE__ */ jsx(LogOut, { className: "mr-2 h-4 w-4" }), " Sign out"]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ jsx(StatCard, {
						label: "Total leads",
						value: stats.total.toString()
					}),
					/* @__PURE__ */ jsx(StatCard, {
						label: "New",
						value: stats.new.toString()
					}),
					/* @__PURE__ */ jsx(StatCard, {
						label: "Won",
						value: stats.won.toString()
					}),
					/* @__PURE__ */ jsx(StatCard, {
						label: "Est. pipeline",
						value: `NPR ${Math.round(stats.estimatedValue).toLocaleString()}`
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-card",
				children: leads.isLoading ? /* @__PURE__ */ jsx("div", {
					className: "grid h-48 place-items-center text-muted-foreground",
					children: /* @__PURE__ */ jsx(Loader2, { className: "h-6 w-6 animate-spin" })
				}) : data.length === 0 ? /* @__PURE__ */ jsx("div", {
					className: "grid h-48 place-items-center text-sm text-muted-foreground",
					children: "No leads yet."
				}) : /* @__PURE__ */ jsx("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
						/* @__PURE__ */ jsx(TableHead, { children: "Date" }),
						/* @__PURE__ */ jsx(TableHead, { children: "Customer" }),
						/* @__PURE__ */ jsx(TableHead, { children: "Contact" }),
						/* @__PURE__ */ jsx(TableHead, { children: "Service" }),
						/* @__PURE__ */ jsx(TableHead, { children: "Source" }),
						/* @__PURE__ */ jsx(TableHead, { children: "Est. Cost" }),
						/* @__PURE__ */ jsx(TableHead, { children: "Status" })
					] }) }), /* @__PURE__ */ jsx(TableBody, { children: data.map((l) => /* @__PURE__ */ jsxs(TableRow, { children: [
						/* @__PURE__ */ jsx(TableCell, {
							className: "whitespace-nowrap text-xs text-muted-foreground",
							children: new Date(l.created_at).toLocaleDateString()
						}),
						/* @__PURE__ */ jsxs(TableCell, { children: [/* @__PURE__ */ jsx("div", {
							className: "font-semibold text-foreground",
							children: l.full_name
						}), /* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground",
							children: l.location || "—"
						})] }),
						/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-1",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: `tel:${l.phone}`,
									title: "Call",
									className: "grid h-7 w-7 place-items-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5" })
								}),
								/* @__PURE__ */ jsx("a", {
									href: whatsappLink(`Hi ${l.full_name}, regarding your painting request...`).replace("9779700590228", l.phone.replace(/\D/g, "")),
									target: "_blank",
									rel: "noreferrer",
									title: "WhatsApp",
									className: "grid h-7 w-7 place-items-center rounded-lg text-white",
									style: { backgroundColor: "#25D366" },
									children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-3.5 w-3.5" })
								}),
								l.email && /* @__PURE__ */ jsx("a", {
									href: `mailto:${l.email}`,
									title: "Email",
									className: "grid h-7 w-7 place-items-center rounded-lg bg-accent/10 text-accent",
									children: /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5" })
								})
							]
						}) }),
						/* @__PURE__ */ jsx(TableCell, {
							className: "max-w-[200px] truncate text-xs",
							children: l.service_type || l.message || "—"
						}),
						/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, {
							variant: "secondary",
							className: "text-[10px]",
							children: l.source
						}) }),
						/* @__PURE__ */ jsx(TableCell, {
							className: "whitespace-nowrap text-sm",
							children: l.estimated_cost_npr ? `NPR ${Math.round(Number(l.estimated_cost_npr)).toLocaleString()}` : "—"
						}),
						/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(Select, {
							value: l.status,
							onValueChange: (v) => setStatus(l.id, v),
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								className: `h-8 w-32 text-xs ${STATUS_COLORS[l.status] || ""}`,
								children: /* @__PURE__ */ jsx(SelectValue, {})
							}), /* @__PURE__ */ jsx(SelectContent, { children: STATUSES.map((s) => /* @__PURE__ */ jsx(SelectItem, {
								value: s,
								children: s
							}, s)) })]
						}) })
					] }, l.id)) })] })
				})
			})
		]
	});
}
function StatCard({ label, value }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-border bg-card p-5 shadow-card",
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-xs font-bold uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-2 font-display text-2xl font-black text-foreground",
			children: value
		})]
	});
}
//#endregion
export { AdminPage as component };
