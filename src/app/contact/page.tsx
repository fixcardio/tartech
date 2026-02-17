import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { company } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote for tar surfacing, roadworks, and civil construction services.",
  openGraph: {
    title: "Contact | Tar-Tech Surface",
    description: "Get in touch for quotes, site visits, and project planning."
  }
};

export default function ContactPage() {
  return (
    <Section title="Contact" intro="Tell us about your project. We will come back to you quickly with next steps.">
      <div className="grid gap-8 lg:grid-cols-[1.3fr,1fr]">
        <form className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
          <h2 className="text-lg font-semibold">Request a Quote</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input required placeholder="Name" className="rounded-lg border border-white/10 bg-charcoal px-3 py-2 text-sm" />
            <input placeholder="Company" className="rounded-lg border border-white/10 bg-charcoal px-3 py-2 text-sm" />
            <input required placeholder="Phone" className="rounded-lg border border-white/10 bg-charcoal px-3 py-2 text-sm" />
            <input required type="email" placeholder="Email" className="rounded-lg border border-white/10 bg-charcoal px-3 py-2 text-sm" />
            <input required placeholder="Service needed" className="rounded-lg border border-white/10 bg-charcoal px-3 py-2 text-sm md:col-span-2" />
            <input required placeholder="Location" className="rounded-lg border border-white/10 bg-charcoal px-3 py-2 text-sm md:col-span-2" />
            <textarea placeholder="Notes" rows={4} className="rounded-lg border border-white/10 bg-charcoal px-3 py-2 text-sm md:col-span-2" />
          </div>
          <button type="submit" className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-black hover:bg-orange-300">
            Submit Request
          </button>
        </form>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
            <h3 className="text-lg font-semibold">Direct Contact</h3>
            <p className="mt-3 text-sm text-zinc-300">Phone: <Link href={company.phoneHref} className="text-brand">{company.phoneDisplay}</Link></p>
            <p className="mt-2 text-sm text-zinc-300">Email: <Link href={`mailto:${company.email}`} className="text-brand">{company.email}</Link></p>
            <p className="mt-2 text-sm text-zinc-300">
              WhatsApp: <Link href={`https://wa.me/${company.whatsappNumber}`} target="_blank" className="text-brand">Chat now</Link>
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-white/20 bg-zinc-900/40 p-6">
            <h3 className="text-lg font-semibold">Map</h3>
            <p className="mt-2 text-sm text-zinc-300">Google Map embed placeholder. Replace this block with your office or depot map iframe.</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
