"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffects";

const MyApproach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="text-3xl font-bold lg:text-4xl text-white text-center">
        My <span className="text-purple-300">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4 ">
        <Card
          description="I start every project by understanding your goals and mapping out a clear, actionable plan. This ensures we’re always moving in the right direction."
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
        />
        <Card
          description="I keep you updated with regular progress reports and transparent communication, so you’re always in the loop as your project comes to life."
          title="Development & Progress update"
          icon={<AceternityIcon order="Phase 2" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          description="Once everything is ready, I handle the launch smoothly and make sure your project is set up for long-term success."
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children, // not used anymore
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  return (
    <div
      className="bg-gradient-to-br from-[#101223]/95 via-[#181c2f]/95 to-[#3a2177]/90 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-purple-400/40 active:scale-100 transition-all duration-300 max-w-sm w-full mx-auto p-8 lg:h-[35rem] rounded-3xl relative flex flex-col items-center justify-center gap-6"
    >
      <div className="flex items-center justify-center mb-2">
        {icon}
      </div>
      <h2 className="dark:text-white text-black mt-4 font-bold text-3xl text-center">
        {title}
      </h2>
      <h2
        className="dark:text-white text-sm font-bold text-center mt-4"
        style={{ color: "#e4ecff" }}
      >
        {description}
      </h2>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 font-bold px-5 py-2 text-white backdrop-blur-3xl text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default MyApproach;
