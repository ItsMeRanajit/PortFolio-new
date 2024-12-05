import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const footer = () => {
  return (
    <div className="font-fontLogo px-5 md:px-0 mt-12 text-white/70 max-w-[1000px] container mx-auto border-t border-gray-700 pt-4 flex justify-between items-center mb-16">
      <h1 className="text-2xl font-bold">
        <span className="text-orange-400">Ranajit</span> Das
      </h1>

      <div className="flex spacex-6 mt-4 gap-8 mb-10">
        <a href="https://linkedin.com/in/ranajit-das-8ba2b8239" target="_blank" className="hover:text-gray-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/ItsMeRanajit" target="_blank" className="hover:text-gray-300">
          <FaGithub size={24} />
        </a>
        {/* <a href="" className="hover:text-gray-300">
          <FaLinkedin size={24} />
        </a> */}
      </div>
    </div>
  );
};

export default footer;
