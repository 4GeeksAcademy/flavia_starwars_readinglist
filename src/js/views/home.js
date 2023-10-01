import React, { useState, useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = document.querySelector(".planets");
    const scrollAmount = 5 * 200;
    if (direction === "right") {
      container.scrollLeft += scrollAmount;
    } else if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    }
    setScrollPosition(container.scrollLeft);
  };

  const loadMorePlanets = () => {
    actions.fetchMorePlanets();
  };
  return (
    <div className="sectionsContainer">
      <button className="arrowButton" onClick={() => handleScroll("left")}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        className="arrowButton"
        onClick={() => {
          handleScroll("right");
          loadMorePlanets();
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <div className="planets text-center">
        {store.planets.map((item, index) => (
          <div className="imgContainer text-white" key={index}>
            <img
              className="imgPlanets"
              src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
              alt={item.name}
            />
            <span className="planetName">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
