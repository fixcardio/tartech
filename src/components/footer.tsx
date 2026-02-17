import Link from "next/link";
import { company, navLinks, services } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">{company.name}</h3>
          <p className="mt-3 text-sm text-zinc-300">Tar surfacing and civil construction for roads, industrial yards, and infrastructure projects.</p>
          <p className="mt-4 text-sm text-zinc-400">Service Areas: {company.areas.join(", ")}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-zinc-300 hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">Services</h4>
          <ul className="mt-3 space-y-2">
            {services.map((service) => (
              <li key={service.title} className="text-sm text-zinc-300">
                {service.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <p className="container-shell text-xs text-zinc-500">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
