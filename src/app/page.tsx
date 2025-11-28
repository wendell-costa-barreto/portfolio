"use client";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ComputerProgramming01Icon } from "@hugeicons/core-free-icons";
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
  Horizon,
  Scheduler,
} from "@/lib/utils";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Home() {
  const [email] = useState("wendellbarreto2007@gmail.com");

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // file in public folder
    link.download = "resume.pdf"; // name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <main className="overflow-hidden w-full">
        <motion.div
          className="w-full md:w-[55%] h-[69vh] md:h-[40vh] flex justify-center items-center md:items-start flex-col ml-0 md:ml-[7%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className={`${roboto.className} uppercase font-roboto text-6xl md:text-7xl ml-[8%]`}
            variants={itemVariants}
          >
            Front End Developer{" "}
            <span
              className={`${roboto.className} font-roboto uppercase text-6xl md:text-7xl md:hidden`}
            >
              and Designer
            </span>
          </motion.h1>
          <motion.h1
            className={`${roboto.className} uppercase font-roboto text-6xl md:text-7xl hidden md:block`}
            variants={itemVariants}
          >
            and Designer
          </motion.h1>
        </motion.div>

        <motion.div
          className="w-full h-[10vh] flex justify-end items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mr-0 md:mr-[7%] flex flex-col items-center md:items-start space-y-2 max-w-md"
            variants={itemVariants}
          >
            <h1
              className={`${roboto.className} uppercase font-roboto text-xl text-justify w-[80%] mb-6`}
            >
              Hi, I’m Wendell — a front-end developer and designer who builds
              fast, beautiful, and user-focused interfaces. Based in Brazil,
              working worldwide.
            </h1>
            <button
              onClick={handleDownload}
              className={`${roboto.className} flex gap-1 bg-white cursor-pointer justify-center text-black rounded-xl items-center px-4 py-2 uppercase font-roboto text-xl text-justify w-[55%]`}
            >
              Download Resume <ArrowDown />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-[55%] h-[40vh] flex justify-center items-start flex-col ml-[7%] mt-[12%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className={`${roboto.className} uppercase font-roboto text-7xl`}>
            My skillset
          </h1>
        </motion.div>

        <motion.div
          className="w-full h-[40vh] flex justify-center items-center mb-[5%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[84%] h-[40vh]">
            <motion.div
              className="flex flex-col justify-start items-center gap-8"
              variants={itemVariants}
            >
              <h1
                className={`${roboto.className} uppercase font-roboto text-3xl mt-[5%] flex items-center gap-4`}
              >
                <HugeiconsIcon icon={ComputerProgramming01Icon} size={36} />
                Fullstack Development
              </h1>

              <p
                className={`${roboto.className} font-roboto text-xl text-justify w-[75%]`}
              >
                Experienced in building responsive apps using React, Next.js,
                Express.js, MongoDB TypeScript, and Tailwind CSS. Familiar with
                modern UI libraries (Shadcn/UI) and testing tools like Jest and
                React Testing Library.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col justify-start items-center gap-8"
              variants={itemVariants}
            >
              <h1
                className={`${roboto.className} uppercase font-roboto text-3xl mt-[5%] flex items-center gap-4`}
              >
                <IoLanguageOutline size={36} />
                Language Skills
              </h1>

              <p
                className={`${roboto.className} font-roboto text-xl text-justify w-[75%]`}
              >
                Fluent in Portuguese, English, and Spanish. Intermediate in
                French, German, and Japanese; basic in Russian and Chinese.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col justify-start items-center gap-8"
              variants={itemVariants}
            >
              <h1
                className={`${roboto.className} uppercase font-roboto text-3xl mt-[5%] flex items-center gap-4`}
              >
                <MdOutlineDesignServices size={36} />
                UI/UX Design and Versioning Tools
              </h1>

              <p
                className={`${roboto.className} font-roboto text-xl text-justify w-[75%]`}
              >
                Skilled with Figma, Git, and GitHub. Solid understanding of
                UI/UX principles and design best practices.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="w-[55%] h-[40vh] flex justify-center items-start flex-col ml-[7%] mt-[82vh] md:mt-[1%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1
            className={`${roboto.className} uppercase font-roboto text-5xl md:text-7xl`}
          >
            My projects
          </h1>
        </motion.div>
        <motion.div
          className="w-full flex justify-start items-center mt-[1%] flex-col gap-[3vh] mb-[2%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full flex justify-start items-center mt-[1%] flex-col lg:flex-row">
            <motion.div className="ml-[5%] w-[80%]" variants={itemVariants}>
              <CarouselDemo
                propArray={VisitezLeQuebec}
                title="Visitez Le Quebec"
                href="visitezlequebec"
              />
            </motion.div>
            <motion.div
              className="w-[80%] h-full  lg:mt-0"
              variants={itemVariants}
            >
              <CarouselDemo
                propArray={NexusDashboard}
                title="Nexus Dashboard"
                href="nexusdashboard"
              />
            </motion.div>
          </div>

          <div className="w-full flex justify-start items-center mt-[1%] flex-col lg:flex-row">
            <motion.div
              className="ml-[5%] w-[80%]  lg:mt-0"
              variants={itemVariants}
            >
              <CarouselDemo
                propArray={SolarSystem}
                title="3D Solar System"
                href="solarsystem"
              />
            </motion.div>
            <motion.div
              className="w-[80%] h-full  lg:mt-0"
              variants={itemVariants}
            >
              <CarouselDemo
                propArray={EldenRing}
                title="Elden Ring"
                href="eldenring"
              />
            </motion.div>
          </div>

          <div className="w-full flex justify-start items-center mt-[2%] flex-col lg:flex-row">
            <motion.div
              className="ml-[5%] w-[80%]  lg:mt-0"
              variants={itemVariants}
            >
              <Link href={"/projects/cats"}>
                <CarouselDemo propArray={Cats} title="Cat Races" href="cats" />
              </Link>
            </motion.div>
            <motion.div
              className="ml-[5%] w-[80%]  lg:mt-0"
              variants={itemVariants}
            >
              <Link href={"/projects/cats"}>
                <CarouselDemo
                  propArray={Horizon}
                  title="Event Horizon"
                  href="horizon"
                />
              </Link>
            </motion.div>
          </div>
          <div className="w-full flex justify-start items-center mt-[2%] flex-col lg:flex-row">
            <motion.div
              className="ml-[5%] w-[80%]  lg:mt-0"
              variants={itemVariants}
            >
              <Link href={"/projects/scheduler"}>
                <CarouselDemo
                  propArray={Scheduler}
                  title="Communitary Scheduling Platform"
                  href="scheduler"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <motion.div
        className="h-[40vh] text-white lg:mt-[10%]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.main
          className="container mx-auto flex flex-col md:flex-row h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16"
            variants={itemVariants}
          >
            <h1
              className={`text-4xl md:text-5xl font-bold tracking-tight ${roboto.className}`}
            >
              I’m open to freelance, contract, or full-time opportunities.
            </h1>
            <div className="h-1 w-48 bg-gradient-to-r from-indigo-600 to-purple-600 mt-4 mb-6"></div>
            <p className={`text-gray-300 max-w-md ${roboto.className}`}>
              Turning ideas into elegant,
              <br />
              user-friendly apps.
            </p>
            <div className="mt-12 flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                <span className="text-xs">WB</span>
              </div>
              <span className="ml-3 text-sm">Wendell Barreto</span>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16"
            variants={itemVariants}
          >
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
                  href="www.linkedin.com/in/wendell-costa-barreto-junior"
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
                  href="https://wa.me/+5571999018090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 hover:text-indigo-400 transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.main>
      </motion.div>
    </>
  );
}
