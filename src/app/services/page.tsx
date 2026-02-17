import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Tar surfacing, roadworks, civil construction, and telecom trenching services.",
  openGraph: {
    title: "Services | Tar-Tech Surface",
    description: "Explore Tar-Tech Surface service capabilities for civil and surfacing projects."
  }
};

export default function ServicesPage() {
  return (
    <Section title="Services" intro="Built for contractors, developers, municipalities, and infrastructure teams.">
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  );
}
