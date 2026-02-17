import Link from "next/link";
import { company } from "@/data/content";

export function WhatsAppSticky() {
  return (
    <Link
      href={`https://wa.me/${company.whatsappNumber}`}
      target="_blank"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-brand px-5 py-3 text-sm font-bold text-black shadow-lg hover:bg-orange-300"
    >
      WhatsApp
    </Link>
  );
}
