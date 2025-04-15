import {
  VisitezLeQuebec,
  SolarSystem,
  NexusDashboard,
  EldenRing,
  Cats,
} from "@/lib/utils";

type Project = {
  name: string;
  title: string;
  images: { src: string; alt: string; id: string }[];
};

const projects: Project[] = [
  {
    name: "visitezlequebec",
    title: "Visitez le Québec",
    images: VisitezLeQuebec,
  },
  {
    name: "solarsystem",
    title: "Solar System",
    images: SolarSystem,
  },
  {
    name: "nexusdashboard",
    title: "Nexus Dashboard",
    images: NexusDashboard,
  },
  {
    name: "eldenring",
    title: "Elden Ring",
    images: EldenRing,
  },
  {
    name: "cats",
    title: "Cats",
    images: Cats,
  },
];

import type { Metadata } from "next";

export async function getProjectMetadata(id: string): Promise<Metadata> {
  const project = projects.find((p) => p.name === id);

  if (!project) {
    return {
      title: "Project Not Found",
      openGraph: {
        images: [],
      },
    };
  }

  return {
    title: project.title,
    openGraph: {
      images: [
        "/some-specific-page-image.jpg",
        ...project.images.map((img) => img.src),
      ],
    },
  };
}
