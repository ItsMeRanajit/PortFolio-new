"use client";
import NavBar from "../components/navBar";
import Homepage from "../components/Home";
import Education from "../components/education";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";
import GotoTop from "../components/gotoTop";
import Loader from "../components/loader";
import { useState } from "react";

export default function Home() {
  const [loadCount, setLoadCount] = useState(true);
  setTimeout(() => {
    setLoadCount(false);
  }, 3000);

  return (
    <>
      <main className="bg-[#feae1b] h-screen relative w-full z-[100]">
        {loadCount ? (
          <Loader />
        ) : (
          <div>
            <div className="relative">
              <NavBar />
              <Homepage />
            </div>
            <div className="z-[30] relative bg-black pt-24 ">
              <Education />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </div>
            <GotoTop />
          </div>
        )}
      </main>
    </>
  );
}
