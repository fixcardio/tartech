import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="section-gap">
      <div className="container-shell">
        <div className="mb-8 max-w-2xl">
          {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p> : null}
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          {intro ? <p className="mt-3 text-base text-zinc-300 md:text-lg">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
