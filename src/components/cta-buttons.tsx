import Link from "next/link";
import { company } from "@/data/content";

export function CtaButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/contact"
        className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-300"
      >
        Request a Quote
      </Link>
      <Link
        href={`https://wa.me/${company.whatsappNumber}`}
        target="_blank"
        className="rounded-full border border-zinc-600 px-5 py-3 text-sm font-semibold transition hover:border-brand hover:text-brand"
      >
        WhatsApp Us
      </Link>
    </div>
  );
}
