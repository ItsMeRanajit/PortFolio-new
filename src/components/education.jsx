import React from "react";
import Image from "next/image";
import book from "../app/images/book.png";
import card from "../app/images/card.png";
import pc from "../app/images/pc.png";
import finance from "../app/images/finance.png";
import profilepic from "../app/images/profilepic.png";

const education = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-bold font-fontLogo p-4 mb-4 ">
        About{` `}
        <span className="text-orange-400">Me</span>
      </h1>

      <div className="px-2 md:p-0 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden flex flex-col md:flex-row p-6 justify-center items-center">
        <Image src={profilepic} alt="profilePic" className="w-[220px] h:[220px] md:h-[180px] md:w-[180px]"></Image>
        <div className="flex flex-col ">
          <h1 className="text-2xl font-bold text-white/80 font-fontLogo mt-4"> Computer Science Engineering Student | Full-Stack Developer</h1>
          <div className="mt-2 text-white font-fontLogo3 tracking-widest">
            Hello! I'm Tadano, a final-year Computer Science Engineering student from Hooghly Engineering and Technology College (Batch '25). With a strong foundation in front-end technologies like
            React and Tailwind CSS, paired with back-end expertise in Node.js, Express, and frameworks like Next.js, I specialize in creating seamless and responsive web applications. I’m fluent in
            multiple programming languages, including Java, JavaScript, Python, and C, and have honed my problem-solving skills through diverse projects and challenges. Passionate about building
            efficient, scalable solutions and staying at the forefront of modern tech.
          </div>
          <button className="btn-custom w-64 ">
            <a href="/resume.pdf" download>
              Get my Resume
            </a>
          </button>
        </div>
      </div>

      <div className="grid px-2 md:p-0 md:grid-cols-8 gap-6 place-items-center mt-5">
        <div className="w-full  md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-700 opacity-30 animate-gradient-xy"></div>

          <div className="flex flex-row p-6">
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-white/80 font-fontLogo">Education</h2>
              <p className="text-lg text-white/70 mt-2">
                I am currently pursuing a BTech in Computer Science and Engineering at Hooghly Engineering and Technology College, with an expected graduation in 2025. Prior to that, I completed my X
                and XII at Sarsuna High School, Kolkata.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full  md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-700 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={pc} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-white/80 font-fontLogo">Problem Solving</h2>
              <p className="text-lg text-white/70 mt-2">I excel in problem-solving, breaking down complex issues and finding efficient solutions with logical thinking and persistence.</p>
            </div>
          </div>
        </div>

        <div className="w-full  md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-700 opacity-30 animate-gradient-xy"></div>

          <div className="flex flex-row p-6">
            <Image src={card} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-white/80 font-fontLogo">Experience</h2>
              <p className="text-lg text-white/70 mt-2">I have a diverse portfolio of projects.</p>
            </div>
          </div>
        </div>

        <div className="w-full  md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-700 opacity-30 animate-gradient-xy"></div>

          <div className="flex flex-row p-6">
            <Image src={finance} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-white/80">Technical Skills</h2>
              <p className="text-lg text-white/70 mt-2">I am proficient in frontend and backend development, working with React, Next.js, databases like MongoDB and SQL.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default education;
