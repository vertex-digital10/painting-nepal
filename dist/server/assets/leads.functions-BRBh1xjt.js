import { i as TSS_SERVER_FUNCTION, r as createServerFn } from "./server-lGNvfAT9.js";
import { t as requireSupabaseAuth } from "./auth-middleware-CpGQH9Qu.js";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
//#region node_modules/@tanstack/start-server-core/dist/esm/createServerRpc.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/leads.functions.ts?tss-serverfn-split
var LeadInput = z.object({
	full_name: z.string().trim().min(2).max(120),
	phone: z.string().trim().min(7).max(40),
	email: z.string().trim().email().max(200).optional().or(z.literal("")),
	location: z.string().trim().max(200).optional().or(z.literal("")),
	service_type: z.string().trim().max(100).optional().or(z.literal("")),
	message: z.string().trim().max(2e3).optional().or(z.literal("")),
	source: z.string().trim().max(60).default("contact_form"),
	room_type: z.string().trim().max(60).optional().or(z.literal("")),
	selected_color: z.string().trim().max(40).optional().or(z.literal("")),
	finish_type: z.string().trim().max(40).optional().or(z.literal("")),
	estimated_area_sqft: z.number().nonnegative().max(1e6).optional(),
	estimated_cost_npr: z.number().nonnegative().max(1e9).optional(),
	plan_tier: z.string().trim().max(40).optional().or(z.literal(""))
});
function publicClient() {
	return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY, { auth: {
		storage: void 0,
		persistSession: false,
		autoRefreshToken: false
	} });
}
var submitLead_createServerFn_handler = createServerRpc({
	id: "e211e8c27eee0a1053129b7769a37cb2e31b3dc869a84a1c647eee19cfb57993",
	name: "submitLead",
	filename: "src/lib/leads.functions.ts"
}, (opts) => submitLead.__executeServer(opts));
var submitLead = createServerFn({ method: "POST" }).inputValidator((d) => LeadInput.parse(d)).handler(submitLead_createServerFn_handler, async ({ data }) => {
	const sb = publicClient();
	const payload = {
		...data,
		email: data.email || null,
		location: data.location || null,
		service_type: data.service_type || null,
		message: data.message || null,
		room_type: data.room_type || null,
		selected_color: data.selected_color || null,
		finish_type: data.finish_type || null,
		plan_tier: data.plan_tier || null
	};
	const { error } = await sb.from("leads").insert(payload);
	if (error) {
		console.error("submitLead error", error);
		throw new Error("Could not save your request. Please call or WhatsApp us.");
	}
	return { ok: true };
});
var listLeads_createServerFn_handler = createServerRpc({
	id: "77acd1c20769f0aaa93fdea78adabaa9f8b27285e13363740e4c85703e8554bc",
	name: "listLeads",
	filename: "src/lib/leads.functions.ts"
}, (opts) => listLeads.__executeServer(opts));
var listLeads = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(listLeads_createServerFn_handler, async ({ context }) => {
	const { data: isAdmin } = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	if (!isAdmin) throw new Error("Forbidden");
	const { data, error } = await context.supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(500);
	if (error) throw new Error(error.message);
	return data ?? [];
});
var updateLeadStatus_createServerFn_handler = createServerRpc({
	id: "21503154d15b2a6d3e78fc15fb27b4e450edac316c8cc25a3af7d59ecfd4a86e",
	name: "updateLeadStatus",
	filename: "src/lib/leads.functions.ts"
}, (opts) => updateLeadStatus.__executeServer(opts));
var updateLeadStatus = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => z.object({
	id: z.string().uuid(),
	status: z.enum([
		"new",
		"contacted",
		"quoted",
		"won",
		"lost"
	])
}).parse(d)).handler(updateLeadStatus_createServerFn_handler, async ({ context, data }) => {
	const { data: isAdmin } = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	if (!isAdmin) throw new Error("Forbidden");
	const { error } = await context.supabase.from("leads").update({ status: data.status }).eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var checkIsAdmin_createServerFn_handler = createServerRpc({
	id: "5ac699bce56e55142e356e7268a8191bc285ab8258857f40ca0daacd220be2c0",
	name: "checkIsAdmin",
	filename: "src/lib/leads.functions.ts"
}, (opts) => checkIsAdmin.__executeServer(opts));
var checkIsAdmin = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(checkIsAdmin_createServerFn_handler, async ({ context }) => {
	const { data } = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	return {
		isAdmin: Boolean(data),
		userId: context.userId
	};
});
//#endregion
export { checkIsAdmin_createServerFn_handler, listLeads_createServerFn_handler, submitLead_createServerFn_handler, updateLeadStatus_createServerFn_handler };
