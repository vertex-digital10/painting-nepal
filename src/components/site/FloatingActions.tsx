import { MessageCircle, Phone } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site-config";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={`tel:${SITE.phoneRaw}`}
        aria-label="Call now"
        className="grid h-13 w-13 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition hover:scale-105 sm:h-14 sm:w-14"
        style={{ height: 52, width: 52 }}
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative grid place-items-center rounded-full shadow-elegant transition hover:scale-105"
        style={{ height: 56, width: 56, backgroundColor: "#25D366", color: "white" }}
      >
        <span className="absolute inset-0 animate-ping rounded-full opacity-40" style={{ backgroundColor: "#25D366" }} />
        <MessageCircle className="relative h-6 w-6" />
      </a>
    </div>
  );
}
