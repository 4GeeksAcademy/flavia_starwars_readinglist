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
          <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" />
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">
            Check the Context in action
          </button>
        </Link>
      </div>
    </nav>
  );
};
