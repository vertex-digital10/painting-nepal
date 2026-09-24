import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Sun, Sunset, Moon, CloudSun, Sparkles, Calculator, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { RoomScene } from "@/components/site/RoomScene";
import { LeadForm } from "@/components/site/LeadForm";
import { NEPAL_PALETTE, FINISHES, LIGHTING, ROOM_TYPES, PRICING, whatsappLink } from "@/lib/site-config";

export const Route = createFileRoute("/visualizer")({
  head: () => ({
    meta: [
      { title: "Virtual Room Painter | 3D Paint Visualizer – Kathmandu" },
      { name: "description", content: "Free 3D virtual room painter. Test wall colors, finishes and lighting before painting. Instant Kathmandu cost estimate." },
      { property: "og:title", content: "Virtual Room Painter – Painting Service Nepal" },
      { property: "og:description", content: "Paint your room in 3D before booking. Free instant cost estimate." },
      { property: "og:url", content: "/visualizer" },
    ],
    links: [{ rel: "canonical", href: "/visualizer" }],
  }),
  component: VisualizerPage,
});

type Finish = (typeof FINISHES)[number];
type Lighting = (typeof LIGHTING)[number];

const SUGGESTIONS = [
  { name: "Modern", colors: ["#F4F1EA", "#3B6E8F", "#E97A5A"] },
  { name: "Luxury", colors: ["#2A3D66", "#E8A33D", "#EFE3CB"] },
  { name: "Minimalist", colors: ["#F4F1EA", "#C9CDD2", "#3C4147"] },
  { name: "Scandinavian", colors: ["#FFFFFF", "#D9E2EC", "#9CB29A"] },
  { name: "Contemporary", colors: ["#EFE3CB", "#3F5E48", "#C4623B"] },
  { name: "Nepali Home", colors: ["#E8A33D", "#C4623B", "#2A3D66"] },
];

const LightIcon: Record<Lighting, typeof Sun> = {
  Morning: Sun,
  Afternoon: CloudSun,
  Evening: Sunset,
  Night: Moon,
};

function VisualizerPage() {
  const [wall, setWall] = useState(NEPAL_PALETTE[3].hex);
  const [ceiling, setCeiling] = useState("#F4F1EA");
  const [floor, setFloor] = useState("#A07655");
  const [finish, setFinish] = useState<Finish>("Satin");
  const [lighting, setLighting] = useState<Lighting>("Afternoon");
  const [roomType, setRoomType] = useState<(typeof ROOM_TYPES)[number]>("Living Room");

  const [length, setLength] = useState(14);
  const [width, setWidth] = useState(12);
  const [height, setHeight] = useState(9);
  const [planTier, setPlanTier] = useState<typeof PRICING[number]["tier"]>("Standard");

  const calc = useMemo(() => {
    const wallArea = 2 * (length + width) * height;
    const ceilingArea = length * width;
    const totalSqft = wallArea + ceilingArea;
    const plan = PRICING.find((p) => p.tier === planTier)!;
    const labor = totalSqft * plan.pricePerSqft;
    const material = labor * 0.6;
    const total = labor + material;
    const days = Math.max(3, Math.round(totalSqft / 250));
    return { totalSqft, labor, material, total, days, plan };
  }, [length, width, height, planTier]);

  const paletteName = NEPAL_PALETTE.find((c) => c.hex.toUpperCase() === wall.toUpperCase())?.name;

  return (
    <>
      <section className="gradient-hero">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            <Sparkles className="h-3.5 w-3.5" /> Virtual Paint Studio
          </span>
          <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            🎨 Virtual Paint Your Room
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Try colors, finishes and lighting on a live 3D room. Get an instant Kathmandu paint
            cost — no signup, no payment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* 3D Stage */}
          <div className="relative h-[460px] overflow-hidden rounded-3xl border border-border shadow-elegant sm:h-[560px]">
            <RoomScene wallColor={wall} ceilingColor={ceiling} floorColor={floor} finish={finish} lighting={lighting} />
            <div className="pointer-events-none absolute left-4 top-4 rounded-full glass-strong px-3 py-1.5 text-xs font-semibold text-foreground">
              {roomType} • {finish} • {lighting}
            </div>
            <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-2 rounded-full glass-strong px-3 py-1.5 text-xs font-semibold text-foreground">
              <span className="h-3 w-3 rounded-full border border-border" style={{ backgroundColor: wall }} />
              {paletteName ?? wall.toUpperCase()}
            </div>
            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full glass-strong px-3 py-1.5 text-[11px] text-muted-foreground">
              Drag to rotate • scroll to zoom
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-5">
            <Panel title="Room type">
              <div className="flex flex-wrap gap-2">
                {ROOM_TYPES.map((r) => (
                  <Pill key={r} active={r === roomType} onClick={() => setRoomType(r)}>{r}</Pill>
                ))}
              </div>
            </Panel>

            <Panel title="Wall color">
              <div className="grid grid-cols-6 gap-2 sm:grid-cols-8">
                {NEPAL_PALETTE.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setWall(c.hex)}
                    title={c.name}
                    aria-label={c.name}
                    className={`aspect-square rounded-xl border-2 transition ${wall.toUpperCase() === c.hex.toUpperCase() ? "border-accent scale-110" : "border-border hover:scale-105"}`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <input
                  type="color"
                  value={wall}
                  onChange={(e) => setWall(e.target.value)}
                  className="h-10 w-12 cursor-pointer rounded-lg border border-border bg-transparent"
                />
                <Input value={wall.toUpperCase()} onChange={(e) => setWall(e.target.value)} className="font-mono" maxLength={9} />
              </div>
            </Panel>

            <Panel title="Ceiling & floor">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs">Ceiling</Label>
                  <div className="mt-1 flex items-center gap-2">
                    <input type="color" value={ceiling} onChange={(e) => setCeiling(e.target.value)} className="h-10 w-12 rounded-lg border border-border" />
                    <Input value={ceiling.toUpperCase()} onChange={(e) => setCeiling(e.target.value)} className="font-mono text-xs" />
                  </div>
                </div>
                <div>
                  <Label className="text-xs">Floor</Label>
                  <div className="mt-1 flex items-center gap-2">
                    <input type="color" value={floor} onChange={(e) => setFloor(e.target.value)} className="h-10 w-12 rounded-lg border border-border" />
                    <Input value={floor.toUpperCase()} onChange={(e) => setFloor(e.target.value)} className="font-mono text-xs" />
                  </div>
                </div>
              </div>
            </Panel>

            <Panel title="Finish">
              <div className="flex flex-wrap gap-2">
                {FINISHES.map((f) => (
                  <Pill key={f} active={f === finish} onClick={() => setFinish(f)}>{f}</Pill>
                ))}
              </div>
            </Panel>

            <Panel title="Lighting">
              <div className="grid grid-cols-4 gap-2">
                {LIGHTING.map((l) => {
                  const Icon = LightIcon[l];
                  const active = l === lighting;
                  return (
                    <button
                      key={l}
                      onClick={() => setLighting(l)}
                      className={`flex flex-col items-center gap-1 rounded-xl border-2 px-2 py-3 text-xs font-semibold transition ${
                        active ? "border-accent bg-accent/10 text-foreground" : "border-border bg-card text-foreground/80 hover:bg-secondary"
                      }`}
                    >
                      <Icon className="h-4 w-4" /> {l}
                    </button>
                  );
                })}
              </div>
            </Panel>
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="mt-10">
          <h2 className="font-display text-xl font-bold text-foreground">AI color recommendations</h2>
          <p className="mt-1 text-sm text-muted-foreground">Tap a style to apply a curated palette.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SUGGESTIONS.map((s) => (
              <button
                key={s.name}
                onClick={() => {
                  setWall(s.colors[1]);
                  setCeiling(s.colors[0]);
                  setFloor(s.colors[2]);
                }}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-left transition hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="flex -space-x-2">
                  {s.colors.map((c) => (
                    <span key={c} className="h-9 w-9 rounded-full border-2 border-card shadow-sm" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-foreground">{s.name}</div>
                  <div className="text-xs text-muted-foreground group-hover:text-accent">Apply palette →</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Cost estimator */}
        <div className="mt-12 grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2 text-accent">
              <Calculator className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Paint Cost Estimator</span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-black text-foreground">Instant Kathmandu estimate</h2>
            <p className="mt-1 text-sm text-muted-foreground">Enter your room size and pick a plan.</p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div>
                <Label className="text-xs">Length (ft)</Label>
                <Input type="number" value={length} onChange={(e) => setLength(Number(e.target.value) || 0)} />
              </div>
              <div>
                <Label className="text-xs">Width (ft)</Label>
                <Input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value) || 0)} />
              </div>
              <div>
                <Label className="text-xs">Height (ft)</Label>
                <Input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value) || 0)} />
              </div>
            </div>

            <div className="mt-5">
              <Label className="text-xs">Plan</Label>
              <div className="mt-1 grid grid-cols-3 gap-2">
                {PRICING.map((p) => (
                  <button
                    key={p.tier}
                    onClick={() => setPlanTier(p.tier)}
                    className={`rounded-xl border-2 px-3 py-2 text-center text-xs font-bold transition ${
                      planTier === p.tier ? "border-accent bg-accent/10" : "border-border bg-background hover:bg-secondary"
                    }`}
                  >
                    {p.tier}
                    <div className="text-[10px] font-medium text-muted-foreground">NPR {p.pricePerSqft}/sqft</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl gradient-primary p-6 text-primary-foreground shadow-elegant">
            <div className="text-xs font-bold uppercase tracking-widest opacity-80">Estimated Project Cost</div>
            <div className="mt-2 font-display text-4xl font-black">
              NPR {Math.round(calc.total).toLocaleString()}
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="opacity-70 text-xs">Paintable area</dt>
                <dd className="font-display text-lg font-bold">{Math.round(calc.totalSqft).toLocaleString()} sqft</dd>
              </div>
              <div>
                <dt className="opacity-70 text-xs">Duration</dt>
                <dd className="font-display text-lg font-bold">{calc.days} days</dd>
              </div>
              <div>
                <dt className="opacity-70 text-xs">Labor</dt>
                <dd className="font-display text-lg font-bold">NPR {Math.round(calc.labor).toLocaleString()}</dd>
              </div>
              <div>
                <dt className="opacity-70 text-xs">Material</dt>
                <dd className="font-display text-lg font-bold">NPR {Math.round(calc.material).toLocaleString()}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs opacity-75">
              Estimate based on standard wall coverage. Final price confirmed after free site visit.
            </p>
          </div>
        </div>

        {/* Lead capture */}
        <div className="mt-12 grid gap-6 rounded-3xl border border-border bg-secondary/40 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Save your design</span>
            <h2 className="mt-2 font-display text-3xl font-black text-foreground">Book a free site visit</h2>
            <p className="mt-3 text-muted-foreground">
              We'll bring real paint samples in your chosen colors and confirm the estimate on-site.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild className="gradient-accent text-accent-foreground">
                <a href={whatsappLink(`Hi, I designed a ${roomType} in ${paletteName ?? wall} (${finish}). Please send a quote.`)} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp my design
                </a>
              </Button>
              <Button asChild variant="outline" className="border-2">
                <a href="#lead-form">Get free quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
          <div id="lead-form" className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <LeadForm
              source="visualizer"
              defaultService={`Visualizer – ${roomType}`}
              extra={{
                room_type: roomType,
                selected_color: paletteName ?? wall,
                finish_type: finish,
                estimated_area_sqft: Math.round(calc.totalSqft),
                estimated_cost_npr: Math.round(calc.total),
                plan_tier: planTier,
              }}
              compact
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{title}</div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Pill({ active, children, onClick }: { active?: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition ${
        active ? "border-accent bg-accent/10 text-foreground" : "border-border bg-background text-foreground/80 hover:bg-secondary"
      }`}
    >
      {children}
    </button>
  );
}

