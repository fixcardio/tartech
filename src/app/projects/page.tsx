import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project examples across tar surfacing, roadworks, and civil construction.",
  openGraph: {
    title: "Projects | Tar-Tech Surface",
    description: "View project references from roadworks and civil construction engagements."
  }
};

export default function ProjectsPage() {
  return (
    <Section title="Projects" intro="A selection of project types we deliver with consistency and control.">
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
