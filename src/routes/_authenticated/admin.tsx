import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, LogOut, Mail, MessageCircle, Phone, Shield, ShieldOff } from "lucide-react";
import { supabase } from "@/integration/supabase/client";
import { Button } from "@/components/UI/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/UI/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/UI/select";
import { Badge } from "@/components/UI/badge";
import { toast } from "sonner";
import { checkIsAdmin, listLeads, updateLeadStatus } from "@/lib/leads.functions";
import { whatsappLink } from "@/lib/site-config";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin – Painting Service Nepal" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

const STATUSES = ["new", "contacted", "quoted", "won", "lost"] as const;
const STATUS_COLORS: Record<string, string> = {
  new: "bg-primary/10 text-primary",
  contacted: "bg-accent/10 text-accent",
  quoted: "bg-chart-3/10 text-chart-3",
  won: "bg-success/10 text-success",
  lost: "bg-destructive/10 text-destructive",
};

function AdminPage() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const check = useServerFn(checkIsAdmin);
  const list = useServerFn(listLeads);
  const update = useServerFn(updateLeadStatus);

  const [adminState, setAdminState] = useState<"loading" | "yes" | "no">("loading");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    check({} as never)
      .then((r) => {
        setAdminState(r.isAdmin ? "yes" : "no");
        setUserId(r.userId);
      })
      .catch(() => setAdminState("no"));
  }, [check]);

  const leads = useQuery({
    queryKey: ["admin", "leads"],
    queryFn: () => list({} as never),
    enabled: adminState === "yes",
    refetchInterval: 30_000,
  });

  const signOut = async () => {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  const setStatus = async (id: string, status: (typeof STATUSES)[number]) => {
    try {
      await update({ data: { id, status } });
      toast.success("Lead updated");
      qc.invalidateQueries({ queryKey: ["admin", "leads"] });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Failed");
    }
  };

  if (adminState === "loading") {
    return (
      <div className="mx-auto grid min-h-[60vh] max-w-md place-items-center px-4">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (adminState === "no") {
    return (
      <div className="mx-auto max-w-xl px-4 py-16">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-card">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-destructive/10 text-destructive">
            <ShieldOff className="h-6 w-6" />
          </div>
          <h1 className="mt-4 font-display text-2xl font-black text-foreground">Not authorized</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your account is signed in but doesn't have the admin role yet.
          </p>
          <div className="mt-4 rounded-xl bg-secondary/60 p-4 text-left text-xs text-muted-foreground">
            Ask a current admin to grant the role by running this SQL in Lovable Cloud:
            <pre className="mt-2 overflow-x-auto rounded bg-background p-3 text-[11px] text-foreground">
INSERT INTO public.user_roles (user_id, role)
VALUES ('{userId ?? "<your-user-id>"}', 'admin');
            </pre>
          </div>
          <Button onClick={signOut} variant="outline" className="mt-6"><LogOut className="mr-2 h-4 w-4" /> Sign out</Button>
        </div>
      </div>
    );
  }

  const data = leads.data ?? [];
  const stats = {
    total: data.length,
    new: data.filter((d) => d.status === "new").length,
    won: data.filter((d) => d.status === "won").length,
    estimatedValue: data.reduce((s, d) => s + (Number(d.estimated_cost_npr) || 0), 0),
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest">
            <Shield className="h-3.5 w-3.5" /> Admin Dashboard
          </div>
          <h1 className="mt-1 font-display text-3xl font-black text-foreground">Leads</h1>
          <p className="mt-1 text-sm text-muted-foreground">Inquiries from quote forms, visualizer, and contact page.</p>
        </div>
        <Button onClick={signOut} variant="outline"><LogOut className="mr-2 h-4 w-4" /> Sign out</Button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total leads" value={stats.total.toString()} />
        <StatCard label="New" value={stats.new.toString()} />
        <StatCard label="Won" value={stats.won.toString()} />
        <StatCard label="Est. pipeline" value={`NPR ${Math.round(stats.estimatedValue).toLocaleString()}`} />
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
        {leads.isLoading ? (
          <div className="grid h-48 place-items-center text-muted-foreground"><Loader2 className="h-6 w-6 animate-spin" /></div>
        ) : data.length === 0 ? (
          <div className="grid h-48 place-items-center text-sm text-muted-foreground">No leads yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Est. Cost</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((l) => (
                  <TableRow key={l.id}>
                    <TableCell className="whitespace-nowrap text-xs text-muted-foreground">
                      {new Date(l.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="font-semibold text-foreground">{l.full_name}</div>
                      <div className="text-xs text-muted-foreground">{l.location || "—"}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <a href={`tel:${l.phone}`} title="Call" className="grid h-7 w-7 place-items-center rounded-lg bg-primary/10 text-primary"><Phone className="h-3.5 w-3.5" /></a>
                        <a href={whatsappLink(`Hi ${l.full_name}, regarding your painting request...`).replace("9779700590228", l.phone.replace(/\D/g, ""))} target="_blank" rel="noreferrer" title="WhatsApp" className="grid h-7 w-7 place-items-center rounded-lg text-white" style={{ backgroundColor: "#25D366" }}><MessageCircle className="h-3.5 w-3.5" /></a>
                        {l.email && (
                          <a href={`mailto:${l.email}`} title="Email" className="grid h-7 w-7 place-items-center rounded-lg bg-accent/10 text-accent"><Mail className="h-3.5 w-3.5" /></a>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate text-xs">{l.service_type || l.message || "—"}</TableCell>
                    <TableCell><Badge variant="secondary" className="text-[10px]">{l.source}</Badge></TableCell>
                    <TableCell className="whitespace-nowrap text-sm">
                      {l.estimated_cost_npr ? `NPR ${Math.round(Number(l.estimated_cost_npr)).toLocaleString()}` : "—"}
                    </TableCell>
                    <TableCell>
                      <Select value={l.status} onValueChange={(v) => setStatus(l.id, v as typeof STATUSES[number])}>
                        <SelectTrigger className={`h-8 w-32 text-xs ${STATUS_COLORS[l.status] || ""}`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {STATUSES.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-2xl font-black text-foreground">{value}</div>
    </div>
  );
}


