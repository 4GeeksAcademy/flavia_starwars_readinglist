import React, { useState, useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Slider from "../component/slider";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <Slider arr_section={store.planets} name_section="planets" />
      <Slider arr_section={store.characters} name_section="characters" />
      <Slider arr_section={store.starships} name_section="starships" />
      <Slider arr_section={store.vehicles} name_section="vehicles" />
      <Slider arr_section={store.species} name_section="species" />
    </>
  );
};

export default Home;
