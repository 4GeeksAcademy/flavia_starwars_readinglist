import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/filmSlider.css";

const FilmSlider = ({ arr_section, name_section }) => {
  const { store, actions } = useContext(Context);
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerId = `slider-${name_section}`;

  const handleScroll = (direction) => {
    const container = document.getElementById(containerId);
    const scrollAmount = 5 * 200;
    if (direction === "right") {
      container.scrollLeft += scrollAmount;
    } else if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    }
    setScrollPosition(container.scrollLeft);
  };
  arr_section.sort((a, b) => a.properties.episode_id - b.properties.episode_id);

  return (
    <div className="theContainer">
      <button className="arrowButton left" onClick={() => handleScroll("left")}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        className="arrowButton right"
        onClick={() => {
          handleScroll("right");
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <div className="sectionContainer">
        <h4>{name_section}</h4>
        <div className="section text-center" id={containerId}>
          {arr_section.map((item, index) => (
            <div className="imgContainer text-white" key={index}>
              <img
                className="imgSection"
                src={`https://starwars-visualguide.com/assets/img/${name_section}/${item.uid}.jpg`}
                alt={item.name}
              />
              <span className="itemName">
                Episode {item.properties.episode_id}: {item.properties.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmSlider;
