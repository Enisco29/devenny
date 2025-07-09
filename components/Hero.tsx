import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>
      <div className=" flex h-screen w-full items-center justify-center absolute top-0 left-0 bg-white dark:bg-[#000319]">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#0d0e18_1px,transparent_1px),linear-gradient(to_bottom,#0d0e18,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]" />
      </div>
      <div className="flex flex-col justify-center items-center relative mb-20 z-10">
        <div className="flex justify-center items-center">
          <Image
            src="/profile.webp"
            alt="profile-image"
            className="w-32 h-32 sm:h-45 sm:w-45 rounded-full border-4 border-purple-300 shadow-lg object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-white"
            width={128}
            height={128}
          />
        </div>
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[65vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            duration={2}
            filter={false}
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
            Hi, I&apos;m Fisayo, a JavaScript Developer
          </p>
          <div className="flex gap-4 ">
            <a href="mailto:opeyemioluwafisayo29@gmail.com" className="group">
              <MagicButton
                title="Hire Me"
                icon={<FaEnvelope />}
                position="right"
                otherClasses="!bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 !text-[#000319] !shadow-lg !ring-2 !ring-purple-300 !ring-offset-2 group-hover:scale-105 group-hover:shadow-purple-400/60 animate-pulse hover:animate-none transition-transform duration-300"
              />
            </a>
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
