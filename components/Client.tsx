import React from "react";
import { InfiniteMovingCards } from "./ui/InifiniteMovingCards";
import { companies, testimonials } from "@/data";

const Client = () => {
  return (
    <div className="pb-20" id="testimonials">
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
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
