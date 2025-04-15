import { clsx, type ClassValue } from "clsx"
import { ImageProps } from "@/components/ui/VerticalSlider"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const VisitezLeQuebec: ImageProps[] = [
  {
    alt: "Home page of VisitezLeQuebec",
    src: "/portfolio-photos/visitezlequebec/home.jpg",
    id: "1",
  },
  {
    alt: "Page on apresski",
    src: "/portfolio-photos/visitezlequebec/apresski.jpg",
    id: "2",
  },
  {
    alt: "Page on culture",
    src: "/portfolio-photos/visitezlequebec/culture.jpg",
    id: "3",
  },
  {
    alt: "A map of Québec",
    src: "/portfolio-photos/visitezlequebec/map.jpg",
    id: "4",
  },
  {
    alt: "Page on activities",
    src: "/portfolio-photos/visitezlequebec/activities.jpg",
    id: "5",
  },
  {
    alt: "Page on top destinations",
    src: "/portfolio-photos/visitezlequebec/top_dest.jpg",
    id: "6",
  },
];

export const NexusDashboard: ImageProps[] = [
  {
    alt: "Home page of Nexus Dashboard",
    src: "/portfolio-photos/nexus/home.jpg",
    id: "1",
  },
  {
    alt: "Home page of Nexus Dashboard",
    src: "/portfolio-photos/nexus/home2.jpg",
    id: "2",
  },
  {
    alt: "Page on dashboard",
    src: "/portfolio-photos/nexus/dashboard.jpg",
    id: "3",
  },
  {
    alt: "Page on table",
    src: "/portfolio-photos/nexus/table.jpg",
    id: "4",
  },
  {
    alt: "Page on charts",
    src: "/portfolio-photos/nexus/charts.jpg",
    id: "5",
  },
];

export const SolarSystem: ImageProps[] = [
  {
    alt: "Image of the solar system",
    src: "/portfolio-photos/solarSystem/solarSystem1.jpg",
    id: "1",
  },
  {
    alt: "Image of the solar system",
    src: "/portfolio-photos/solarSystem/solarSystem2.jpg",
    id: "2",
  },
];

export const EldenRing: ImageProps[] = [
  {
    alt: "Image of Elden Ring Home Screen",
    src: "/portfolio-photos/elden-ring-replica/home.jpg",
    id: "1",
  },
  {
    alt: "Image of Elden Ring",
    src: "/portfolio-photos/elden-ring-replica/class.jpg",
    id: "2",
  },
  {
    alt: "Image of Elden Ring",
    src: "/portfolio-photos/elden-ring-replica/class2.jpg",
    id: "3",
  },
];

export const Cats: ImageProps[] = [
  {
    alt: "Website home page of cats races",
    src: "/portfolio-photos/cats/cat-home.jpg",
    id: "1",
  }, 
  {
    alt: "Article on cats races",
    src: "/portfolio-photos/cats/cats2.jpg",
    id: "2",
  },
  {
    alt: "Article on cats races",
    src: "/portfolio-photos/cats/cats3.jpg",
    id: "3",
  }
]

import { Roboto_Condensed } from "next/font/google";

export const roboto = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
});
