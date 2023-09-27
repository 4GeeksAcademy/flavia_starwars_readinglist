import React, { useState, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
  
	return (
	  <div className="rigo text-center">
		{store.planets.map((item, index) => (
		  <div className="text-white" key={index}>
			{item.name}
		  </div>
		))}
	  </div>
	);
  };


  
  
  
  
  
  

export default Home;
