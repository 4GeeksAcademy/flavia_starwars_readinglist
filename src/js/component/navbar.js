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
            src="https://i0.wp.com/cajadevectores.com/wp-content/uploads/2023/02/BABY-YODA-12PNG.png?fit=1728%2C1728&ssl=1"
          />
        </span>
      </Link>
      <div className="ml-auto">
        <button className="nav_btn line">
          <a
            href="https://www.disneyplus.com/es-es/brand/star-wars"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stream now
          </a>
        </button>
        <Link to="/favorites">
          <button className="nav_btn line">Saved</button>
        </Link>
        <Link to="/demo">
          <button className="nav_btn line">Log in</button>
        </Link>
      </div>
    </nav>
  );
};
