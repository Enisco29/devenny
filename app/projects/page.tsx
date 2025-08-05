import React from "react";
import RecentProjects from "../../components/RecentProjects";

const page = () => {
  return (
    <div className="relative bg-[#000319] flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      <RecentProjects
      magicBtnUrl="/"
      magicBtntitle="Go back"
        heading={
          <h1 className="text-3xl font-bold lg:text-4xl text-white text-center">
            latest <span className="text-purple-300">projects</span>
          </h1>
        }
      />
    </div>
  );
};

export default page;
