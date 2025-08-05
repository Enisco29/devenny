"use client";
import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingButton";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaEnvelope } from "react-icons/fa6";

const Experiences = () => {
  const [durations, setDurations] = React.useState<number[]>([]);

  React.useEffect(() => {
    setDurations(
      workExperience.map(() => Math.floor(Math.random() * 10000 + 10000))
    );
  }, []);

  return (
    <div className="md:pb-20 mt-15 flex flex-col" id="testimonials">
      <h1 className="text-3xl font-bold lg:text-4xl text-white text-center">
        My <span className="text-purple-300">work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, i) => (
          <Button
            key={card.id}
            duration={durations[i] || 15000}
            borderRadius="1.75rem"
            className="flex-1 text-white dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md;p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
                width={128}
                height={128}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p
                  className="text-start text-white mt-3 font-semibold
                "
                >
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
        
      </div>
      <a
          href="https://drive.google.com/uc?export=download&id=1K6SfhrMpSjxZuLys3pNaUb9lBa06xOIf"
          target="_blank"
          download
          rel="noopener noreferrer"
          title="resume"
          className="group md:mb-2 mt-15 md:mt-10 text-center"
        >
          <MagicButton
            title="Download resume"
            icon={<FaEnvelope />}
            position="right"
          />
        </a>
    </div>
  );
};

export default Experiences;
