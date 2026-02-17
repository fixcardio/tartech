import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/content";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-asphalt/95 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="relative h-9 w-40">
          <Image src="/logo.svg" alt="Tar-Tech Surface logo" fill className="object-contain object-left" priority />
        </Link>
        <Link href="/contact" className="rounded-full border border-zinc-600 px-4 py-2 text-xs font-semibold hover:border-brand hover:text-brand">
          Get Quote
        </Link>
      </div>
      <nav className="container-shell flex gap-5 overflow-x-auto pb-3 text-sm md:justify-end md:pb-4">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap text-zinc-300 transition hover:text-brand">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
