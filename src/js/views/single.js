import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [properties, setProperties] = useState([]);

  const itemID = params.theid;
  const section = params.thename;
  useEffect(() => {
    if (section == "planets") {
      actions.fetchSinglePlanet(itemID).then((data) => {
        setProperties(Object.entries(data.properties));
      });
    }
  }, [params.theid]);
  console.log(properties);
  return (
    <>
      <div className="singleViewContainer">
        <div className="description">
          <div className="singleImgContainer">
            <img
              src={`https://starwars-visualguide.com/assets/img/${section}/${itemID}.jpg`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
            />
          </div>
          <div className="singleDataContainer">
            {properties.map(([property, value], index) => {
              let title = "";
              if (property === "name") {
                title = value;
              }
              return (
                <>
                  <h1>{title}</h1>
                  <div className="singleItemDescription" key={index}>
                    {property}: {value}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
