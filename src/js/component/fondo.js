import React, { useState, useEffect, useRef } from "react";
import "../../styles/fondo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const Fondo = () => {
  const [scroll, setScroll] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  console.log(videoEnded);
  useEffect(() => {
    gsap.utils.toArray(".navbar").forEach((elem) => {
      ScrollTrigger.create({
        trigger: elem,
        onToggle: ({ isActive }) => {
          setScroll(isActive);
        },
      });
    });
  }, []);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };
  return (
    <div className={`fondo ${scroll ? "totalBrightness" : "lessBrightness"}`}>
      <video
        className={`${videoEnded? "noOpacity": ""}`}
        playsInline
        autoPlay
        muted
        poster="https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        id="bgvid"
        onEnded={handleVideoEnded}
      >
        <source
          src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2021/11/04/1636056809-star-wars.mp4"
          type="video/webm"
        ></source>
      </video>
      <div className="background-image"></div>
    </div>
  );
};
