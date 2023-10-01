import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

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
      className={`navbar mb-3 sticky-top ${
        isInView ? "bg-transparent" : "bg-black"
      }`}
    >
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
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
