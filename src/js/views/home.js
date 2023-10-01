import React, { useState, useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const loadMorePlanets = () => {
    actions.fetchMorePlanets();
  };
  return (
    <div className="sectionsContainer">
      <div className="planets text-center">
        {store.planets.map((item, index) => (
          <div className="text-white" key={index}>
            {item.name}
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
            ></img>
          </div>
        ))}
      </div>
      <button onClick={loadMorePlanets}>Cargar más</button>
    </div>
  );
};

export default Home;
