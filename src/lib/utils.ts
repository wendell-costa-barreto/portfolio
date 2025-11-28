import { clsx, type ClassValue } from "clsx"
import { ImageProps } from "@/types/image"
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
    alt: "Second page of VisitezLeQuebec",
    src: "/portfolio-photos/visitezlequebec/home2.jpg",
    id: "2",
  },
  {
    alt: "Third page of VisitezLeQuebec",
    src: "/portfolio-photos/visitezlequebec/home3.jpg",
    id: "3",
  },
  {
    alt: "Fourth page of VisitezLeQuebec",
    src: "/portfolio-photos/visitezlequebec/home4.jpg",
    id: "4",
  },
  {
    alt: "Fifth page of VisitezLeQuebec",
    src: "/portfolio-photos/visitezlequebec/home5.jpg",
    id: "5",
  },
  {
    alt: "Sixth page of VisitezLeQuebec",
    src: "/portfolio-photos/visitezlequebec/deplacer.png",
    id: "6",
  }
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
    alt: "Page on dashboard",
    src: "/portfolio-photos/nexus/dashboard2.jpg",
    id: "4",
  },
  {
    alt: "Page on login",
    src: "/portfolio-photos/nexus/login.jpg",
    id: "5",
  },
    {
    alt: "Page on signup",
    src: "/portfolio-photos/nexus/signup.jpg",
    id: "6",
  },  {
    alt: "Page on portfolio",
    src: "/portfolio-photos/nexus/portfolio.jpg",
    id: "7",
  },
    {
    alt: "Page on adding holdings",
    src: "/portfolio-photos/nexus/addHolding.jpg",
    id: "8",
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

export const Horizon: ImageProps[] = [
  {
    alt: "Home page of Horizon",
    src: "/portfolio-photos/horizon/home.png",
    id: "1",
  },
  {
    alt: "Home page of Horizon",
    src: "/portfolio-photos/horizon/home2.png",
    id: "2",
  },
  {
    alt: "Home page of Horizon",
    src: "/portfolio-photos/horizon/home3.png",
    id: "3",
  },
]

export const Scheduler: ImageProps[] = [
  {
    alt: "Login page of Scheduler",
    src: "/portfolio-photos/scheduler/home.png.jpg",
    id: "1",
  },
  {
    alt: "User area to schedule",
    src: "/portfolio-photos/scheduler/home2.png.jpg",
    id: "2",
  },
  {
    alt: "Modal to schedule and to invite others",
    src: "/portfolio-photos/scheduler/home3.png.jpg",
    id: "3",
  },
  {
    alt: "Admin panel",
    src: "/portfolio-photos/scheduler/home4.png.jpg",
    id: "4",
  },
  {
    alt: "General settings",
    src: "/portfolio-photos/scheduler/home5.png.jpg",
    id: "5",
  },
]

import { Roboto_Condensed } from "next/font/google";

export const roboto = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
});
