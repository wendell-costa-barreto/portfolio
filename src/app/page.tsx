"use client";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight04Icon,
  ComputerProgramming01Icon,
} from "@hugeicons/core-free-icons";
import { IoLanguageOutline } from "react-icons/io5";
import { MdEmail, MdOutlineDesignServices } from "react-icons/md";
import CarouselDemo from "@/components/ui/VerticalSlider";
import {
  VisitezLeQuebec,
  SolarSystem,
  NexusDashboard,
  EldenRing,
  Cats,
  roboto,
} from "@/lib/utils";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";

export default function Home() {
  const [email] = useState("wendellbarreto2007@gmail.com");
  return (
    <>
      <main>
        <div className="w-[55%] h-[40vh] flex justify-center items-start flex-col ml-[7%]">
          <h1
            className={`${roboto.className} uppercase font-roboto text-7xl ml-[5%]`}
          >
            Front End Developer
          </h1>
          <h1 className={`${roboto.className} uppercase font-roboto text-7xl`}>
            and Designer
          </h1>
        </div>

        <div className="w-full h-[10vh] flex justify-end items-center">
          <div className="mr-[7%] flex flex-col items-start space-y-2 max-w-md">
            <h1
              className={`${roboto.className} uppercase font-roboto text-xl text-justify`}
            >
              Hey there, my name is Wendell, I&apos;m a front-end developer and
              designer fluent in both code and human language. I build
              intuitive, beautiful interfaces from Brazil to wherever you are.
            </h1>
            <Link
              href="/about"
              className={`${roboto.className} group uppercase font-roboto text-xl flex items-center gap-2 duration-300`}
            >
              More about me{" "}
              <HugeiconsIcon
                icon={ArrowRight04Icon}
                className="transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>

        <div className="w-[55%] h-[40vh] flex justify-center items-start flex-col ml-[7%] mt-[12%]">
          <h1 className={`${roboto.className} uppercase font-roboto text-7xl`}>
            My skillset
          </h1>
        </div>

        <div className="w-full h-[40vh] flex justify-center items-center mb-[5%]">
          <div className="grid grid-cols-3 gap-6 w-[84%] h-[40vh]">
            <div className="flex flex-col justify-start items-center gap-8">
              <h1
                className={`${roboto.className} uppercase font-roboto text-3xl mt-[5%] flex items-center gap-4`}
              >
                <HugeiconsIcon icon={ComputerProgramming01Icon} size={36} />
                Front End Developing
              </h1>

              <p
                className={`${roboto.className} font-roboto text-xl text-justify w-[75%]`}
              >
                Proficient in HTML, CSS, Javascript, Typescript, React, Next.JS
                and lesser frameworks/libraries such as Tailwind, Shadcn/ui and
                others as well as testing libraries such as Jest and React
                Testing Library
              </p>
            </div>

            <div className="flex flex-col justify-start items-center gap-8">
              <h1
                className={`${roboto.className} uppercase font-roboto text-3xl mt-[5%] flex items-center gap-4`}
              >
                <IoLanguageOutline size={36} />
                Language Skills
              </h1>

              <p
                className={`${roboto.className} font-roboto text-xl text-justify w-[75%]`}
              >
                Fluent in Portuguese, English, Spanish and French, with
                intermediate level in German, Japanese, and basic level in
                Korean, Russian and Chinese
              </p>
            </div>
            <div className="flex flex-col justify-start items-center gap-8">
              <h1
                className={`${roboto.className} uppercase font-roboto text-3xl mt-[5%] flex items-center gap-4`}
              >
                <MdOutlineDesignServices size={36} />
                UI/UX Design and Versing Tools
              </h1>

              <p
                className={`${roboto.className} font-roboto text-xl text-justify w-[75%]`}
              >
                Proficient in Figma, and versing tools such as Git and Github,
                also with knowledge on UI/UX design concepts and best practices
              </p>
            </div>
          </div>
        </div>

        <div className="w-[55%] h-[40vh] flex justify-center items-start flex-col ml-[7%] mt-[1%]">
          <h1 className={`${roboto.className} uppercase font-roboto text-7xl`}>
            My projects
          </h1>
        </div>

        <div className="w-full flex justify-start items-center mt-[2%] flex-row">
          <div className="ml-[5%] w-[80%]">
            <CarouselDemo
              propArray={VisitezLeQuebec}
              title="Visitez Le Quebec"
              href="visitezlequebec"
            />
          </div>
          <div className="w-[80%] h-full">
            <CarouselDemo
              propArray={NexusDashboard}
              title="Nexus Dashboard"
              href="nexusdashboard"
            />
          </div>
        </div>

        <div className="w-full flex justify-start items-center flex-row mt-[-18%]">
          <div className="ml-[5%] w-[80%]">
            <CarouselDemo
              propArray={SolarSystem}
              title="3D Solar System"
              href="solarsystem"
            />
          </div>
          <div className="w-[80%] h-full">
            <CarouselDemo
              propArray={EldenRing}
              title="Elden Ring"
              href="eldenring"
            />
          </div>
        </div>

        <div className="w-full flex justify-start items-center flex-row mt-[-18%]">
          <div className="ml-[5%] w-[80%]">
            <Link href={"/projects/cats"}>
              <CarouselDemo
                propArray={Cats}
                title="Cat Races Gallery"
                href="cats"
              />
            </Link>
          </div>
        </div>
      </main>

      <div className="h-[40vh] text-white">
        <main className="container mx-auto flex flex-col md:flex-row h-full">
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
            <h1
              className={`text-4xl md:text-5xl font-bold tracking-tight ${roboto.className}`}
            >
              LET&apos;S WORK
              <br />
              TOGETHER
            </h1>
            <div className="h-1 w-48 bg-gradient-to-r from-indigo-600 to-purple-600 mt-4 mb-6"></div>
            <p className={`text-gray-300 max-w-md ${roboto.className}`}>
              Developing innovative solutions
              <br />
              for tomorrow&apos;s challenges
            </p>
            <div className="mt-12 flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                <span className="text-xs">WB</span>
              </div>
              <span className="ml-3 text-sm">Wendell Barreto</span>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center opacity-90">
                  <MdEmail />
                </div>
                <a
                  href={`mailto:${email}`}
                  className="ml-4 hover:text-indigo-400 transition"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center opacity-90">
                  <FaGithub />
                </div>
                <a
                  href="https://github.com/wendell-costa-barreto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 hover:text-indigo-400 transition"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center opacity-90">
                  <FaLinkedin />
                </div>
                <a
                  href="https://linkedin.com/in/YourUsername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 hover:text-indigo-400 transition"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center opacity-90">
                  <FaWhatsapp />
                </div>
                <a
                  href="https://wa.me/YourPhoneNumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 hover:text-indigo-400 transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
