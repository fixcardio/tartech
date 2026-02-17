import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description: "About Tar-Tech Surface, our standards, approach, and execution culture.",
  openGraph: {
    title: "About | Tar-Tech Surface",
    description: "Learn how Tar-Tech Surface approaches quality, safety, and project delivery."
  }
};

export default function AboutPage() {
  return (
    <Section
      title="About Tar-Tech Surface"
      intro="We are a surface and civil works contractor focused on disciplined execution and long-term value."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
          <h3 className="text-xl font-semibold">How we work</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            Every project starts with scope clarity, site-specific planning, and realistic programming. We prioritize
            safety, quality control, and communication throughout delivery.
          </p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
          <h3 className="text-xl font-semibold">What clients value</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            Reliable mobilization, experienced supervisors, and practical problem solving. We keep progress visible and
            focus on finished work that performs.
          </p>
        </article>
      </div>
    </Section>
  );
}
