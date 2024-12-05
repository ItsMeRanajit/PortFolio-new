"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import "../app/app.css";

const Home = () => {
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  useEffect(() => {
    const handleCord = (e) => {
      if (timeline.isActive()) return;

      setXVal(e.clientX - window.innerWidth / 2);
      setYVal(e.clientY - window.innerWidth / 2);
    };

    window.addEventListener("mousemove", handleCord);

    let timeline = gsap.timeline();
    const parallax_el = document.querySelectorAll(".parallax");
    parallax_el.forEach((el, index) => {
      timeline.fromTo(
        el,
        {
          top: `${el.offsetHeight}px`,
          willChange: "transform",
        },
        { top: "0px", duration: 2, delay: index * 0.3, ease: "power3.inOut" },
        "start"
      );
    });

    timeline.fromTo(
      "#name",
      {
        y: window.innerHeight,
        opacity: 0,
      },
      {
        y: "0px",
        duration: 2,
        opacity: 1,
        ease: "power3.out",
      },
      "2.5"
    );
    timeline.fromTo(
      "#hello",
      {
        y: -150,
        opacity: 0,
      },
      {
        y: "0px",
        opacity: 1,
        duration: 2,
        ease: "power3.in",
      },
      "1"
    );

    return () => {
      window.removeEventListener("mousemove", handleCord);
    };
  }, []);

  useEffect(() => {
    const handleView = () => {
      const parallax_el = document.querySelectorAll(".parallax");
      parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let rotateDeg = (xVal / (window.innerWidth / 2)) * 10;

        el.style.transform = `translateX(${xVal * speedx}px) translateY(${yVal * speedy}px) perspective(3200px) translateZ(${xVal * 0.1}px) rotateY(${rotateDeg}deg)`;
      });
    };
    window.addEventListener("mousemove", handleView);

    return () => {
      window.removeEventListener("mousemove", handleView);
    };
  }, [xVal, yVal]);

  return (
    <div className="animation">
      <div className="animation_layer parallax " id="artback" data-speedx="0.1" data-speedy="0.25"></div>
      <div className="animation_layer parallax" id="mountain" data-speedx="0.12" data-speedy="0.2"></div>
      <div className="animation_layer parallax" id="logoland" data-speedx="0.09" data-speedy="0.15"></div>
      <div className="animation_layer parallax" id="jungle1" data-speedx="0.075" data-speedy="0.1"></div>
      <div className="animation_layer parallax" id="jungle2" data-speedx="0.05" data-speedy="0.03"></div>
      <div className="animation_layer parallax" id="jungle3" data-speedx="0.03" data-speedy="0.025"></div>
      <div className="z-[8] fixed top-[30%] md:top-[20%] left-[50%] transform translate-x-[-50%] translate-y-[-20%] text-center uppercase text-white font-fontLogo w-full">
        <div className="text-xl lg:text-4xl md:text-2xl" id="hello">
          Hello, I&apos;m
        </div>
        <div className="font-extrabold lg:text-9xl text-7xl" id="name">
          Ranajit Das
        </div>
      </div>
      <div className="animation_layer parallax " id="jungle4" data-speedx="0.02" data-speedy="0.023"></div>
      <div className="animation_layer parallax " id="manonmountain" data-speedx="0.015" data-speedy="0.02"></div>
      <div className="animation_layer parallax Name" id="jungle5" data-speedx="0.01" data-speedy="0.0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[10%]  z-[18] bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
};

export default Home;
