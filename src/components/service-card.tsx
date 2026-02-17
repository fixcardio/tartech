type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-card">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-300">{description}</p>
    </article>
  );
}
