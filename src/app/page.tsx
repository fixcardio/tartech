import Link from "next/link";
import { CtaButtons } from "@/components/cta-buttons";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { processSteps, projects, testimonials, trustPoints, services } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-charcoal">
        <div className="absolute inset-0 bg-[url('/textures/asphalt.svg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="container-shell relative section-gap">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Tar-Tech Surface</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">Tar Surfacing & Civil Works Done Right</h1>
          <p className="mt-5 max-w-2xl text-base text-zinc-200 md:text-lg">
            Built on quality, reliability, safety, and timelines you can trust.
          </p>
          <div className="mt-8">
            <CtaButtons />
          </div>
        </div>
      </section>

      <Section title="Trusted delivery on every site" intro="We build with proven methods, practical planning, and clear accountability.">
        <ul className="grid gap-3 md:grid-cols-5">
          {trustPoints.map((point) => (
            <li key={point} className="rounded-xl border border-white/10 bg-zinc-900/50 p-4 text-sm text-zinc-200">
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Core Services" title="Capabilities for demanding projects">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section title="Recent projects" intro="From access roads to ducting corridors, we execute clean, durable outcomes.">
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <Link href="/projects" className="mt-8 inline-block text-sm font-semibold text-brand hover:text-orange-300">
          View projects →
        </Link>
      </Section>

      <Section title="Our process" intro="Simple, structured, and transparent from first call to final handover.">
        <ol className="grid gap-3 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <li key={step} className="rounded-xl border border-white/10 bg-zinc-900/50 p-4 text-sm">
              <span className="mr-2 font-semibold text-brand">0{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </Section>

      <Section title="What clients say">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <p className="text-sm leading-6 text-zinc-200">“{item.quote}”</p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </Section>
    </>
  );
}
