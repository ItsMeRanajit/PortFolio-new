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
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Match this with your fade-out duration
      setFadeOut(true);
    }, 4000); // Total time loader is shown

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#feae1b] min-h-screen relative w-full">
      {/* Loader */}
      {isLoading ? (
        <div className={`fixed inset-0 z-[100] bg-[#feae1b] flex justify-center items-center transition-opacity duration-500 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <Loader />
        </div>
      ) : (
        <div className={`transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"}`}>
          <div className="relative">
            <NavBar />
            <Homepage />
          </div>
          <div className="z-[30] relative bg-black pt-24">
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
  );
}
