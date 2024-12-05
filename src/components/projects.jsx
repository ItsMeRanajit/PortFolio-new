"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import snipx from "../app/images/snipx.png";
import huffman from "../app/images/project.jpg";
import sort from "../app/images/sorting.png";

const projectArr = [
  {
    title: "snipX - Snippet Sharing Platform",
    desc: "A snippet-sharing platform designed for developers to easily share code snippets across different IDEs",
    devStack: ["React Js", "Next Js", "MongoDb", "Tailwind CSS"],
    link: "https://snip-x-chi.vercel.app/",
    git: "https://github.com/ItsMeRanajit/snipX.git",
    src: snipx,
  },
  {
    title: "Sorting-Algorithm-Visualizer",
    desc: "Visualize sorting algorithms in action with animated, interactive visualization. Learn and compare sorting techniques!",
    devStack: ["HTML", "Vanilla CSS", "Vanilla JavaScript"],
    link: "https://itsmeranajit.github.io/Sorting-Algorithm-Visualizer/",
    git: "https://github.com/ItsMeRanajit/Sorting-Algorithm-Visualizer.git",
    src: sort,
  },
  {
    title: "Text Encoder Decoder with Huffman Coding",
    desc: "Java-based Huffman coding compressor for efficient text data reduction.",
    devStack: ["Java", "Java GUI"],
    link: "",
    git: "https://github.com/ItsMeRanajit/Text-compressor-using-Huffman-Coding.git",
    src: huffman,
  },
];

const projects = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#571089] py-18 mt-52" id="projects">
      <h1 className="text-white text-6xl max-w-[450px] mx-auto font-bold font-fontLogo p-4 mb-4">
        <span className="text-orange-400">My</span>
        {` `}Projects
      </h1>

      <div className="max-w-[1000px] mx-auto space-y-24 px-5 md:px-0">
        {projectArr.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-10 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "  md:flex-row gap-12"}`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70 font-fontLogo2">{`0${index + 1}`}</h2>
              <h2 className="text-4xl font-fontLogo">{project.title}</h2>
              <p className="text-lg text-white/70 break-words text-left font-fontLogo3">{project.desc}</p>
              <p className="text-xl text-orange-400 font-semibold font-fontLogo3">{project.devStack.join(" - ")}</p>
              <div className="flex flex-col items-start space-y-4 mt-10 font-fontLogo">
                {/* Horizontal line */}
                <div className="w-64 h-[1px] bg-gray-400"></div>
                <div className="flex gap-6">
                  {/* Project Link Button */}
                  <a
                    href={project.link || "#"}
                    target="_blank"
                    className={`px-6 py-2 rounded-sm text-white 
                        ${project.link ? "bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-300" : "bg-gray-300 cursor-not-allowed"}
                        `}
                  >
                    Link
                  </a>

                  {/* GitHub Link */}
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-black font-medium border border-black rounded-sm  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border rounded border-gray-700"></Image>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default projects;
