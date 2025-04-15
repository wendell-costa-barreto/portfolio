"use client";

import * as React from "react";
import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const roboto = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export type ImageProps = {
  src: string;
  alt: string;
  id: string;
};

type CarouselDemoProps = {
  propArray: ImageProps[];
};

export default function CarouselDemo({
  propArray,
  title,
  href,
}: CarouselDemoProps & { title: string; href: string }) {
  const pushToRoute = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    window.location.href = `projects/${href}`;
  };
  return (
    <Carousel className="w-full max-w-[750px] h-full max-h-[900px]  ">
      <CarouselContent>
        {propArray.map(({ src, alt, id }) => (
          <CarouselItem key={id} className="h-[900px]">
            <div className="p-1 h-full">
              <div className="flex flex-col items-start h-full">
                <h1
                  className={`${roboto.className} text-2xl font-roboto uppercase text-white mb-2.5`}
                >
                  {title}
                </h1>
                <Image
                  className="object-contain w-full h-[50%] cursor-pointer"
                  onClick={pushToRoute}
                  src={src}
                  alt={alt}
                  key={id}
                  width={1000}
                  height={100}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute right-[75px] top-[-30px] z-10">
        <CarouselPrevious className="absolute right-[-50px] top-10 z-10 -translate-y-1/2 transform" />
        <CarouselNext className="absolute right-[-50px] top-10 z-10 -translate-y-1/2 transform" />
      </div>
    </Carousel>
  );
}
