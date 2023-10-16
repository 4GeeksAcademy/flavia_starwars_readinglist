import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/favorites.css";

export const Favorites = () => {
  const { store, actions } = useContext(Context);
  const handleDeleteButton = (id) => {
    actions.removeFromFavorites(id);
  };
  return (
    <div className="favAllContainer">
    <div className="favoriteContainer">
      {store.favorites.map((item, index) => {
        let name = item[0];
        let section = item[1];
        let id = item[2];
        return (
          <div className="favoriteDataContainer">
            <img
            className="favoriteImg"
              src={`https://starwars-visualguide.com/assets/img/${section}/${id}.jpg`}
            />
            <span>{name}</span>
            <i
              class="fa-regular fa-trash-can"
              onClick={() => {
                handleDeleteButton(id);
              }}
            ></i>
          </div>
        );
      })}
    </div>
    </div>
  );
};