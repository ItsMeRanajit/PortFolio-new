import React from "react";
import Image from "next/image";
import book from "../app/images/book.png";
import card from "../app/images/card.png";
import pc from "../app/images/pc.png";
import finance from "../app/images/finance.png";
import profilepic from "../app/images/myPic.jpg";

const education = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-bold font-fontLogo p-4 mb-4 ">
        About{` `}
        <span className="text-orange-400">Me</span>
      </h1>

      <div className="px-2 md:p-0 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden flex flex-col md:flex-row p-6 justify-center items-center">
        <Image src={profilepic} alt="profilePic" className="w-[200px] h-[240px] md:h-[250px] md:w-[200px] mx-4 rounded-md md:self-start mt-6"></Image>
        <div className="flex flex-col ">
          <h1 className="text-2xl font-bold text-white/80 font-fontLogo mt-4"> Computer Science Engineering Student | Full-Stack Developer</h1>
          <div className="mt-2 text-white font-fontLogo3 tracking-widest">
            Hey, I’m Ranajit Das — a final-year CSE student at Hooghly Engineering and Technology College (Batch ‘25). I’m currently figuring out life, code, and everything in between.
            <br />
            Most days, I’m either fixing bugs I caused, thinking about trips I may never take, or diving into side projects that I may or may not finish.
            <br />
            I enjoy building things — whether it’s apps, ideas, or random 3AM playlists. I like clean workflows, practical solutions, and a bit of creative chaos.
            <br />
            I’m still learning, still making mistakes, and still moving forward — one step, one save, and one <code className="bg-gray-700 rounded-sm px-1">console.log</code> at a time.
          </div>
          <a href="/resume.pdf" download className="">
            <button className="btn-custom w-64">Get my Resume</button>
          </a>
        </div>
      </div>

      <div className="grid px-2 md:p-0 md:grid-cols-8 gap-6 place-items-center mt-5">
        <div className="w-full  md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-700 opacity-30 animate-gradient-xy"></div>

          <div className="flex flex-row p-6 items-center">
            <Image src={book} alt="book" className="w-auto h-[150px]" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-white/80 font-fontLogo">Education</h2>
              <div className="text-lg text-white/70 mt-2 tracking-wide">
                <p>I am currently pursuing a BTech in Computer Science and Engineering at Hooghly Engineering and Technology College, with an expected graduation in 2025.</p>

                <p>Prior to that, I completed my X and XII at Sarsuna High School, Kolkata.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-700 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6 items-center">
            <Image src={pc} alt="pc" className="w-auto h-[150px]" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-white/80 font-fontLogo">Problem Solving</h2>
              <p className="text-lg text-white/70 mt-2 tracking-wide">I enjoy solving problems by breaking them down and finding smart, efficient solutions through clear thinking and persistence.</p>
            </div>
          </div>
        </div>

        <div className="w-full  md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-700 opacity-30 animate-gradient-xy"></div>

          <div className="flex flex-row p-6 items-center">
            <Image src={card} alt="book" className="w-auto h-[150px]" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-white/80 font-fontLogo">Experience</h2>
              <div className="text-lg text-white/70 mt-2">
                <p className="text-lg text-white/70 mt-2 tracking-wider">
                  I’ve built a range of diverse projects and will be joining as a junior SDE at{" "}
                  <span className="font-semibold bg-white/30 backdrop-blur-md text-gray-100 px-2 rounded-sm">Codezin, Kolkata.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-700 opacity-30 animate-gradient-xy"></div>

          <div className="flex flex-row p-6">
            <Image src={finance} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-white/80">Technical Skills</h2>
              <p className="text-lg text-white/70 mt-4 ml-1 tracking-wide">
                I juggle frontend and backend — React, Next.js, MongoDB, SQL — plus a bit of DSA and scalable app building. Strong on logic, decent on patience, and still vibing with the fundamentals.{" "}
                <br />
                Basically, if it runs on code, I’ve probably poked it till it worked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default education;
