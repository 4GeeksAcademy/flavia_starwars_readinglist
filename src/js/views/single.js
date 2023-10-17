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
  let section = params.thename;
  let title = "";
  properties.map(([property, value], index) => {
    if (property === "name") {
      title = value;
    }
  });

  useEffect(() => {
    if (section === "characters") {
      section = "people";
    }
    actions.fetchSingle(section, itemID).then((data) => {
      setProperties(Object.entries(data.properties));
    });
  }, [params.theid]);

  let excludedProperties = [
    "name",
    "url",
    "created",
    "edited",
    "homeworld",
    "people",
  ];

  let newArray = properties.filter(
    ([property, value]) => !excludedProperties.includes(property)
  );

  const [saveButton, setSavedButton] = useState(false);

  const handleFavButton = (name, section, id) => {
    actions.addToFavorites(name, section, id);
    setSavedButton(true);
  };

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
          <div className="singleTitleContainer">
            <div className="singleItemDescription">
              <h1>{title}</h1>
              <button
                className="singleSaveButton"
                onClick={() => {
                  handleFavButton(title, section, itemID);
                }}
              >
                {saveButton ? "Saved" : "Save"}
              </button>
              <p>
                Star Wars draws on specific stories from European literature,
                from Christian or Buddhist religion or mythology, in short, from
                specific literary or cultural traditions. And it integrates
                them, remakes them and invents a new story that it proposes to
                the world and is seen by audiences all over the planet who adopt
                it as a new source of reference, knowledge and values.
              </p>
            </div>
          </div>
        </div>
        <div className="details">
          {newArray.slice(0, 10).map(([property, value], index) => {
            const formattedProperty = property.replace(/_/g, " ");
            return (
              <div className="oneDetail" key={index}>
                <h5>{formattedProperty}</h5>
                <p>{value}</p>
              </div>
            );
          })}
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
