import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { Textarea } from "@/components/UI/textarea";
import { submitLead } from "@/lib/leads.functions";

const Schema = z.object({
  full_name: z.string().trim().min(2, "Please enter your name").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(40),
  email: z.string().trim().email("Invalid email").max(200).optional().or(z.literal("")),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  service_type: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});
type FormData = z.infer<typeof Schema>;

export function LeadForm({
  source = "contact_form",
  extra,
  defaultService,
  compact = false,
}: {
  source?: string;
  extra?: Record<string, unknown>;
  defaultService?: string;
  compact?: boolean;
}) {
  const submit = useServerFn(submitLead);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
    defaultValues: { service_type: defaultService ?? "" },
  });

  const onSubmit = async (data: FormData) => {
    setError(null);
    try {
      await submit({ data: { ...data, source, ...(extra ?? {}) } as never });
      setDone(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    }
  };

  if (done) {
    return (
      <div className="grid place-items-center rounded-2xl border border-success/30 bg-success/10 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-success" />
        <h3 className="mt-3 font-display text-xl font-bold text-foreground">Request received!</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Our team will call you within 30 minutes during business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <Label htmlFor="full_name">Full Name *</Label>
          <Input id="full_name" placeholder="Ram Bahadur" {...register("full_name")} />
          {errors.full_name && <p className="mt-1 text-xs text-destructive">{errors.full_name.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" placeholder="98XXXXXXXX" {...register("phone")} />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="Kalanki, Kathmandu" {...register("location")} />
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <Label htmlFor="service_type">Service</Label>
          <Input id="service_type" placeholder="Interior, Exterior, Texture..." {...register("service_type")} />
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" rows={3} placeholder="Tell us about your project (rooms, sqft, deadline)..." {...register("message")} />
        </div>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button type="submit" size="lg" className="w-full gradient-accent text-accent-foreground hover:opacity-90" disabled={isSubmitting}>
        {isSubmitting ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
        ) : (
          "Get My Free Quote"
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Your info is private. We'll respond within 30 minutes (9 AM – 7 PM NPT).
      </p>
    </form>
  );
}

