"use client";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import "../app/app.css"; // keep your styles

const layers = [
  { src: "/images/background.webp", speedx: 0.1, speedy: 0.25, z: 1, scale: 1.0 },
  { src: "/images/mountains.webp", speedx: 0.12, speedy: 0.2, z: 2, scale: 1.36 },
  { src: "/images/logo_land.webp", speedx: 0.09, speedy: 0.15, z: 3, scale: 1.16 },
  { src: "/images/jungle1.webp", speedx: 0.075, speedy: 0.1, z: 4, scale: 1.11 },
  { src: "/images/jungle2.webp", speedx: 0.05, speedy: 0.03, z: 5, scale: 1.051 },
  { src: "/images/jungle3.webp", speedx: 0.03, speedy: 0.025, z: 6, scale: 1.051 },
  { src: "/images/jungle4.webp", speedx: 0.02, speedy: 0.023, z: 11, scale: 1.051 },
  { src: "/images/man_on_mountain.webp", speedx: 0.015, speedy: 0.02, z: 13, scale: 1.065 },
  { src: "/images/jungle5.webp", speedx: 0.01, speedy: 0.0, z: 12, scale: 1.027 },
];

const Home = () => {
  useEffect(() => {
    const parallax_el = document.querySelectorAll(".parallax");

    let mouseX = 0;
    let mouseY = 0;
    let rafId;

    const updateParallax = () => {
      parallax_el.forEach((el) => {
        const speedx = parseFloat(el.dataset.speedx);
        const speedy = parseFloat(el.dataset.speedy);
        const rotateDeg = (mouseX / (window.innerWidth / 2)) * 10;

        el.style.transform = `
          translateX(${mouseX * speedx}px)
          translateY(${mouseY * speedy}px)
          perspective(3200px)
          rotateY(${rotateDeg}deg)
        `;
      });

      rafId = requestAnimationFrame(updateParallax);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX - window.innerWidth / 2;
      mouseY = e.clientY - window.innerHeight / 2;
    };

    window.addEventListener("mousemove", handleMouseMove);
    updateParallax();

    // Entry animation using GSAP
    let timeline = gsap.timeline();
    parallax_el.forEach((el, index) => {
      timeline.fromTo(el, { top: `${el.offsetHeight}px`, willChange: "transform" }, { top: "0px", duration: 2, delay: index * 0.3, ease: "power3.inOut" }, "start");
    });

    timeline.fromTo("#name", { y: window.innerHeight, opacity: 0 }, { y: "0px", duration: 2, opacity: 1, ease: "power3.out" }, "2.5");

    timeline.fromTo("#hello", { y: -150, opacity: 0 }, { y: "0px", opacity: 1, duration: 2, ease: "power3.in" }, "1");

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="animation">
      {layers.map((layer, idx) => (
        <div
          key={idx}
          className="animation_layer parallax"
          data-speedx={layer.speedx}
          data-speedy={layer.speedy}
          style={{
            zIndex: layer.z,
            transform: `scale(${layer.scale})`,
          }}
        >
          <Image
            src={layer.src}
            alt=""
            fill
            priority={idx > 6} // preload top 3 layers only
            quality={100}
            unoptimized={idx > 5}
            sizes="100vw"
            style={{
              objectFit: "cover",
              transform: layer.scale ? `scale(${layer.scale})` : "none",
              willChange: "transform", // helps GPU rendering
              imageRendering: "auto", // optional: try "crisp-edges" or "pixelated"
            }}
            className="pointer-events-none"
          />
        </div>
      ))}

      {/* Name & Text */}
      <div className="z-[8] fixed top-[30%] md:top-[20%] left-[50%] transform translate-x-[-50%] translate-y-[-20%] text-center uppercase text-white font-fontLogo w-full">
        <div className="text-xl lg:text-4xl md:text-2xl" id="hello">
          Hello, I&apos;m
        </div>
        <div className="font-extrabold lg:text-9xl text-7xl" id="name">
          Ranajit Das
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[10%] z-[18] bg-gradient-to-b from-transparent to-black" />
    </div>
  );
};

export default Home;
