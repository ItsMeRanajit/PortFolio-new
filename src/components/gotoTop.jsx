"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const GotoTop = () => {
  const [invisible, setInvisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setInvisible(true);
      } else {
        setInvisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gotoHome = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        className={`${invisible ? "opacity-100 bottom-10 visible" : "opacity-0 bottom-3 invisible"} fixed transition-all duration-300 right-10 z-30  rounded-full bg-orange-400 p-3`}
        onClick={gotoHome}
      >
        <FaArrowUp className="invert" size={30} />
      </button>
    </>
  );
};

export default GotoTop;
