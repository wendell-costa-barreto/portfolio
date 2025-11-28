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
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  console.log({
    Horizon,
    Scheduler,
    CarouselDemo,
  });

  return (
    <>
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
    </>
  );
}
