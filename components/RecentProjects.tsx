"use client"
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { useRouter } from "next/navigation";

const RecentProjects = ({
  heading,
  magicBtnUrl,
  magicBtntitle,
  maxProjects,
}: {
  heading: any;
  magicBtnUrl: string;
  magicBtntitle: string;
  maxProjects?: number;
}) => {
  const router = useRouter();
  return (
    <div className="py-20 flex items-center flex-col" id="projects">
      {heading}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.slice(0, maxProjects || projects.length).map(({ id, title, des, img, iconLists, link, github }) => (
          <div
            key={id}
            className="sm:h-[38rem] lg:min-h-[32.5rem] h-[28rem] flex items-center sm:w-[570px] justify-center w-[80vw]"
          >
            <PinContainer className="text-white">
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10">
                <Image
                  src="/bg.png"
                  alt="bg-img"
                  fill={false}
                  width={570}
                  height={160}
                />

                <Image
                  src={img}
                  alt={title}
                  className="z-10 absolute w-full h-full rounded-xl max-sm:rounded-lg"
                  width={570}
                  height={320}
                />
              </div>
              <h1 className="font-semibold text-purple-200 lg:text-xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light md:text-lg sm:text-sm line-clamp-3">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, i) => (
                    <div
                      key={i}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * i * 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        className="p-2"
                        fill={false}
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center gap-2">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">
                      GitHub
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">
                      Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
        
      </div>
      <MagicButton
          title={magicBtntitle}
          handleClick={() => router.push(magicBtnUrl)}
          icon={<FaLocationArrow />}
          position="right"
        />
    </div>
  );
};

export default RecentProjects;
