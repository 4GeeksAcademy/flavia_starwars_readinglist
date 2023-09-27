const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
    },
    actions: {
      fetchPlanets: () => {
        fetch("https://www.swapi.tech/api/Planets")
          .then((response) => response.json())
          .then((data) => setStore({ planets: data.results }))
          .catch((err) => console.log(err));
      },
    },
  };
};

export default getState;
