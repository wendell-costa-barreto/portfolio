import CarouselDemo from "@/components/ui/VerticalSlider";
import {
  Cats,
  EldenRing,
  NexusDashboard,
  roboto,
  SolarSystem,
  VisitezLeQuebec,
} from "@/lib/utils";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
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
    </>
  );
}
