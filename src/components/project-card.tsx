import Image from "next/image";

type ProjectCardProps = {
  title: string;
  tag: string;
  image: string;
};

export function ProjectCard({ title, tag, image }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
      <div className="relative h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{tag}</p>
        <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      </div>
    </article>
  );
}
