import React from "react";
import { InfiniteMovingCards } from "./ui/InifiniteMovingCards";
import { companies, testimonials } from "@/data";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaEnvelope } from "react-icons/fa6";

const Client = () => {
  return (
    <div className=" flex items-center flex-col" id="testimonials">
      <a
        href="https://drive.google.com/uc?export=download&id=1K6SfhrMpSjxZuLys3pNaUb9lBa06xOIf"
        target="_blank"
        download
        rel="noopener noreferrer"
        title="resume"
        className="group mb-20 md:mb-30"
      >
        <MagicButton
          title="Download resume"
          icon={<FaEnvelope />}
          position="right"
        />
      </a>
      <h1 className="text-3xl font-bold lg:text-4xl text-white text-center">
        Kind words from{" "}
        <span className="text-purple-300">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
          pauseOnHover={true}
          className="mt-20 cursor-pointer"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-60 gap-2">
              <Image
                src={img}
                alt={name}
                className="md:w-20 w-10"
                width={40}
                height={40}
              />
              {nameImg && (
                <Image
                  src={nameImg}
                  alt={name}
                  className="md:w-24 w-20"
                  width={96}
                  height={40}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
