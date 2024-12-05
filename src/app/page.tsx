import NavBar from "../components/navBar";
import Homepage from "../components/Home";
import Education from "../components/education";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <main className="bg-[#feae1b] h-screen relative w-full z-[100]">
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
      </main>
    </>
  );
}
