import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./server-lGNvfAT9.js";
import { t as requireSupabaseAuth } from "./auth-middleware-CpGQH9Qu.js";
import * as React from "react";
import { isRedirect, useRouter } from "@tanstack/react-router";
import { z } from "zod";
//#region node_modules/@tanstack/react-start/dist/esm/useServerFn.js
function useServerFn(serverFn) {
	const router = useRouter();
	return React.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/createSsrRpc.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/leads.functions.ts
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
var submitLead = createServerFn({ method: "POST" }).inputValidator((d) => LeadInput.parse(d)).handler(createSsrRpc("e211e8c27eee0a1053129b7769a37cb2e31b3dc869a84a1c647eee19cfb57993"));
var listLeads = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("77acd1c20769f0aaa93fdea78adabaa9f8b27285e13363740e4c85703e8554bc"));
var updateLeadStatus = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => z.object({
	id: z.string().uuid(),
	status: z.enum([
		"new",
		"contacted",
		"quoted",
		"won",
		"lost"
	])
}).parse(d)).handler(createSsrRpc("21503154d15b2a6d3e78fc15fb27b4e450edac316c8cc25a3af7d59ecfd4a86e"));
var checkIsAdmin = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("5ac699bce56e55142e356e7268a8191bc285ab8258857f40ca0daacd220be2c0"));
//#endregion
export { useServerFn as a, updateLeadStatus as i, listLeads as n, submitLead as r, checkIsAdmin as t };
