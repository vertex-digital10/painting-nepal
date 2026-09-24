import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integration/supabase/types";
import { requireSupabaseAuth } from "@/integration/supabase/auth-middleware";

const LeadInput = z.object({
  full_name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(7).max(40),
  email: z.string().trim().email().max(200).optional().or(z.literal("")),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  service_type: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  source: z.string().trim().max(60).default("contact_form"),
  room_type: z.string().trim().max(60).optional().or(z.literal("")),
  selected_color: z.string().trim().max(40).optional().or(z.literal("")),
  finish_type: z.string().trim().max(40).optional().or(z.literal("")),
  estimated_area_sqft: z.number().nonnegative().max(1_000_000).optional(),
  estimated_cost_npr: z.number().nonnegative().max(1_000_000_000).optional(),
  plan_tier: z.string().trim().max(40).optional().or(z.literal("")),
});

function publicClient() {
  return createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PUBLISHABLE_KEY!,
    { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
  );
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => LeadInput.parse(d))
  .handler(async ({ data }) => {
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
      plan_tier: data.plan_tier || null,
    };
    const { error } = await sb.from("leads").insert(payload);
    if (error) {
      console.error("submitLead error", error);
      throw new Error("Could not save your request. Please call or WhatsApp us.");
    }
    return { ok: true as const };
  });

export const listLeads = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Forbidden");

    const { data, error } = await context.supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const updateLeadStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z.object({
      id: z.string().uuid(),
      status: z.enum(["new", "contacted", "quoted", "won", "lost"]),
    }).parse(d),
  )
  .handler(async ({ context, data }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Forbidden");
    const { error } = await context.supabase
      .from("leads")
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const checkIsAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    return { isAdmin: Boolean(data), userId: context.userId };
  });

