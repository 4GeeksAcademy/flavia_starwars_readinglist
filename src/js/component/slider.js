import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/slider.css";

const Slider = ({ arr_section, name_section }) => {
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

  const loadMore = (section) => {
    if (section === "planets") {
      actions.fetchMorePlanets();
    }
    if (section === "characters") {
      actions.fetchMoreCharacters();
    }
    if (section === "starships") {
      actions.fetchMoreStarships();
    }
    if (section === "vehicles") {
      actions.fetchMoreVehicles();
    }
    if (section === "species") {
      actions.fetchMoreSpecies();
    }
  };

  return (
    <div className="theContainer">
      <button className="arrowButton left" onClick={() => handleScroll("left")}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        className="arrowButton right"
        onClick={() => {
          handleScroll("right");
          loadMore(name_section);
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
              <span className="itemName">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
