import React from "react";
import { FaGithub, FaTwitter, FaRegFilePdf } from "react-icons/fa6";

const email = "opeyemioluwafisayo29@gmail.com";
const githubUrl = "https://github.com/Enisco29";
const twitterUrl = "https://twitter.com/ennycodes";
const resumeUrl = "/resume.pdf"; // Update this if you have a real resume link

const TopProfileNav = () => {
  return (
    <nav className="w-full flex items-center justify-between sm:px-8 px-4 py-3 fixed top-0 left-0 z-[6000] backdrop-blur-md">
      {/* Left: Profile Image */}
      <div className="flex items-center gap-4">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-8 h-8 rounded-full border border-white/20 bg-white object-cover"
        />
        <a
          href={`mailto:${email}`}
          className="hover:underline text-sm sm:text-xs text-white font-medium md:text-base truncate max-w-[40vw] text-center"
        >
          {email}
        </a>
      </div>
      {/* Center: Email */}
      {/* Right: Icons */}
      <div className="flex items-center sm:gap-7 gap-4">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Resume"
          className="text-white hover:text-purple-300 transition text-xl md:text-2xl"
        >
          <FaRegFilePdf />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="text-white hover:text-purple-300 transition text-xl md:text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          className="text-white hover:text-purple-300 transition text-xl md:text-2xl"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default TopProfileNav;
