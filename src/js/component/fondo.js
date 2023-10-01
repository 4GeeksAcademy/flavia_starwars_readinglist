import React, { useState, useEffect } from "react";
import "../../styles/fondo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const Fondo = () => {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    gsap.utils.toArray(".navbar").forEach((elem) => {
      ScrollTrigger.create({
        trigger: elem,
        onToggle: ({ isActive }) => {
          setIsInView(isActive);
        },
      });
    });
  }, []);
  return (
    <div
      className={`fondo ${isInView ? "totalOpacity " : "lessOpacity"}`}
    ></div>
  );
};
