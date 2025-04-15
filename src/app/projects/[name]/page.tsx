"use client";

import { useParams } from "next/navigation";
import {
  VisitezLeQuebec,
  SolarSystem,
  NexusDashboard,
  EldenRing,
  Cats,
} from "@/lib/utils";
import { ImageProps } from "@/components/ui/VerticalSlider";
import Image from "next/image";
import { roboto } from "@/lib/utils";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

type Project = {
  name: string;
  title: string;
  images: ImageProps[];
  description: string;
  techStack: string[];
  demo: string;
  text: Text;
};

type Text = {
  title: string;
  text1: string;
  text2: string | undefined;
  text3: string | undefined;
};

const projects: Project[] = [
  {
    name: "visitezlequebec",
    title: "Visitez le Québec",
    images: VisitezLeQuebec,
    description:
      "A fake tourism agency website incentivating tourists to visit Quebec, made to experiment with React features.",
    techStack: [`React`, "Tailwind CSS"],
    demo: "https://visitez-le-quebec.vercel.app",
    text: {
      title:
        "Welcome to Visitez le Québec: Your Guide to Exploring Québec, Canada",
      text1:
        "At Visitez le Québec, we aim to inspire travelers to discover the stunning beauty, rich culture, and vibrant history of Québec, Canada. Our website serves as a comprehensive resource for exploring this magnificent province, showcasing a variety of activities, popular destinations, and unique cultural experiences.",
      text2:
        "Québec is home to diverse landscapes, from the historic charm of Old Québec City to the natural beauty of the Laurentians. Our site highlights must-visit destinations, including the cobblestone streets of Old Montréal, the breathtaking Mont Tremblant, and the scenic Gaspé Peninsula. Each destination is accompanied by detailed guides to help you plan your perfect trip.",
      text3:
        "Visitez le Québec is designed with modern web technologies, utilizing React for a fast and responsive experience. Tailwind CSS ensures a sleek and user-friendly interface, while MapTiler provides interactive maps to help you navigate the province. The Embla Carousel feature showcases stunning images of Québec's landscapes and cultural events.",
    },
  },
  {
    name: "solarsystem",
    title: "Solar System",
    images: SolarSystem,
    description:
      "A 3D model of the solar system, made to experiment with Three.js and GLTF models.",
    techStack: ["Three.js", "GLTF"],
    demo: "https://solar-system-plum.vercel.app",
    text: {
      title: "3D Model of the Solar System",
      text1:
        "This project is a 3D model of the solar system, made to experiment with Three.js and GLTF models. It features a dynamic sun and planets, as well as orbital paths and rotations with each planet's circumference",
      text2: undefined,
      text3: undefined,
    },
  },
  {
    name: "nexusdashboard",
    title: "Nexus Dashboard",
    images: NexusDashboard,
    description:
      "A fake cryptocurrency dashboard company website which users can utilise to check on the prices of cryptocurrencies, made to experiment with Next.js features.",
    techStack: ["Next.js", "Tailwind CSS"],
    demo: "https://cryptocurrency-dashboard-ihhnoum38-wendell-costas-projects.vercel.app",
    text: {
      title: "Nexus Dashboard: Your Comprehensive Cryptocurrency Dashboard",
      text1:
        "The Nexus Dashboard serves as a powerful tool for visualizing the 100 most popular cryptocurrencies, providing users with comprehensive insights into their values, fluctuations, and historical performance. This dashboard presents essential data, including maximum and minimum values, as well as Open, High, Low, and Close (OHLC) values, all displayed through interactive charts that enhance user engagement and understanding.",
      text2:
        "With its user-friendly interface, the Nexus Dashboard allows for seamless navigation and analysis of cryptocurrency trends, enabling users to make informed decisions based on real-time data. The integration of various charting options facilitates a deeper exploration of market dynamics, empowering both novice and experienced traders to track performance and identify potential investment opportunities effectively. By consolidating critical information in one accessible platform, the Nexus Dashboard stands out as an invaluable resource for anyone interested in the cryptocurrency market.",
      text3:
        "It's completely responsive, built with Next.js along with Tailwind deployed to Vercel, depending as well in the CoinGecko API to fetch the data, and React-Google-Charts and ApexCharts to display the charts.",
    },
  },
  {
    name: "eldenring",
    title: "Elden Ring",
    images: EldenRing,
    description:
      "A replica of the game Elden Ring's UI, made when still learning HTML and CSS.",
    techStack: ["HTML", "CSS"],
    demo: "Not available",
    text: {
      title: "Elden Ring UI Replica",
      text1:
        "A replica of the game Elden Ring's starting UI and the class creation screen. This project was made to learn by experimenting with HTML and CSS.",
      text2: undefined,
      text3: undefined,
    },
  },
  {
    name: "cats",
    title: "Cats",
    images: Cats,
    description: "A website about cats, made when still learning HTML and CSS.",
    techStack: ["HTML", "CSS"],
    demo: "Not available",
    text: {
      title: "Cat Race Wiki",
      text1:
        "This website showcases 14 races of cats in swedish. It was made to learn by experimenting with HTML and CSS.",
      text2: undefined,
      text3: undefined,
    },
  },
];

export default function ProjectPage() {
  const { name: projectName } = useParams();
  const project = projects.find((p) => p.name === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className="w-full h-[10vh] flex justify-center items-start mt-[7%] flex-col mb-[12%]">
        <h1
          className={`${roboto.className} uppercase font-roboto text-3xl mb-5 ml-[7%] font-bold`}
        >
          {project.title}
        </h1>
        <div className="w-full flex justify-start gap-[20%]">
          <h2
            className={`${roboto.className} font-roboto text-2xl mb-5 ml-[7%] w-[30%]`}
          >
            {project.description}
            <br />
            <Link href={project.demo} className="underline">
              Live Demo
            </Link>
          </h2>
          <h2
            className={`${roboto.className} font-roboto text-2xl mb-5 w-[30%]`}
          >
            <span className="font-bold">Tech Stack</span>
            <br /> {project.techStack.join(", ")}
          </h2>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-6 mt-[1%]">
        {project.images.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={800}
            height={500}
            className="object-cover"
          />
        ))}
      </div>

      <div className="w-full h-[60%] flex justify-center items-center my-[5%]">
        <div className="flex flex-col gap-4 w-full justify-center items-center">
          <h1 className={`${roboto.className} font-roboto text-4xl mb-16`}>
            {project.text.title}
          </h1>
          <p
            className={`${roboto.className} font-roboto text-2xl w-[40%] text-justify`}
          >
            {project.text.text1}
          </p>
          {project.text.text2 && (
            <p
              className={`${roboto.className} font-roboto text-2xl w-[40%] text-justify`}
            >
              {project.text.text2}
            </p>
          )}
          {project.text.text3 && (
            <p
              className={`${roboto.className} font-roboto text-2xl w-[40%] text-justify`}
            >
              {project.text.text3}
            </p>
          )}
        </div>
      </div>

      <div className="w-full flex justify-between items-center h-[10vh] relative mb-[7vh]">
        <Link
          href={
            projects.indexOf(project) === 0
              ? projects[projects.length - 1].name
              : projects[projects.indexOf(project) - 1]?.name
          }
          className="flex flex-col justify-center items-start"
        >
          <span
            className={`${roboto.className} font-roboto text-md mx-16 flex gap-4 items-center`}
          >
            <FaArrowLeftLong />
            Previous
          </span>
          <span className={`${roboto.className} font-roboto text-5xl mx-16`}>
            {projects.indexOf(project) === 0
              ? projects[projects.length - 1].title
              : projects[projects.indexOf(project) - 1]?.title}
          </span>
        </Link>
        <button className="absolute bottom-[35%] left-1/2 transform -translate-x-1/2 bg-transparent rounded-full py-3 px-16 hover:cursor-pointer hover:bg-white hover:text-black transition duration-300 ease-in-out border border-white">
          <h1 className={`${roboto.className} font-roboto text-2xl`}>
            <Link href="/projects">All Projects</Link>
          </h1>
        </button>
        <Link
          href={
            projects.indexOf(project) === projects.length - 1
              ? projects[0].name
              : projects[projects.indexOf(project) + 1]?.name
          }
          className="flex flex-col justify-center items-end"
        >
          <span
            className={`${roboto.className} font-roboto text-md mx-16 flex gap-4 items-center`}
          >
            Next
            <FaArrowRightLong />
          </span>
          <span className={`${roboto.className} font-roboto text-5xl mx-16`}>
            {projects.indexOf(project) === projects.length - 1
              ? projects[0].title
              : projects[projects.indexOf(project) + 1]?.title}
          </span>
        </Link>
      </div>
    </>
  );
}
