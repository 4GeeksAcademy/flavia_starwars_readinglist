import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import "../../styles/navbar.css";

export const Navbar = () => {
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
    <nav
      className={`navbar sticky-top ${
        isInView ? "bg-transparent" : "bg-black"
      }`}
    >
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            className="icon"
            src="https://www.disneyclips.com/images6/images/millenium-falcon.png"
          />
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="/favorites">
          <button className="nav_btn line">Saved</button>
        </Link>
      </div>
    </nav>
  );
};
