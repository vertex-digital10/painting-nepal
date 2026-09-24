import { t as supabase } from "./client-BQsdC6_a.js";
import { l as Button } from "./router-CouuoSF9.js";
import { n as Input, t as Label } from "./label-Xvu8-uFf.js";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
//#region src/routes/auth.tsx?tsr-split=component
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = useState("login");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) navigate({ to: "/admin" });
		});
	}, [navigate]);
	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			if (mode === "signup") {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: { emailRedirectTo: window.location.origin + "/auth" }
				});
				if (error) throw error;
				toast.success("Account created. Ask a current admin to grant you the admin role.");
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				toast.success("Signed in");
				navigate({ to: "/admin" });
			}
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Authentication failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsx("section", {
		className: "mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full rounded-3xl border border-border bg-card p-7 shadow-elegant",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mx-auto grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground",
							children: /* @__PURE__ */ jsx("span", {
								className: "font-display text-lg font-black",
								children: "P"
							})
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-4 font-display text-2xl font-black text-foreground",
							children: mode === "login" ? "Admin Sign In" : "Create Admin Account"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "For Painting Service Nepal staff only."
						})
					]
				}),
				/* @__PURE__ */ jsxs("form", {
					onSubmit,
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "email",
							children: "Email"
						}), /* @__PURE__ */ jsx(Input, {
							id: "email",
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value)
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "password",
							children: "Password"
						}), /* @__PURE__ */ jsx(Input, {
							id: "password",
							type: "password",
							required: true,
							minLength: 8,
							value: password,
							onChange: (e) => setPassword(e.target.value)
						})] }),
						/* @__PURE__ */ jsxs(Button, {
							type: "submit",
							className: "w-full gradient-primary text-primary-foreground",
							disabled: loading,
							children: [loading ? /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }) : null, mode === "login" ? "Sign in" : "Create account"]
						})
					]
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => setMode(mode === "login" ? "signup" : "login"),
					className: "mt-4 w-full text-center text-sm text-muted-foreground hover:text-foreground",
					children: mode === "login" ? "First admin? Create an account" : "Already have an account? Sign in"
				})
			]
		})
	});
}
//#endregion
export { AuthPage as component };
