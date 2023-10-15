export const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      characters: [],
      starships: [],
      vehicles: [],
      species: [],
      films: [],
      url_next: "",
      favorites: [],
    },
    actions: {
      fetchPlanets: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => response.json())
          .then((data) =>
            setStore({ planets: data.results, url_next: data.next })
          )
          .catch((err) => console.log(err));
      },
      fetchMorePlanets: () => {
        const store = getStore();
        fetch(store.url_next)
          .then((response) => response.json())
          .then((data) => {
            const newPlanets = [...store.planets, ...data.results];
            setStore({
              planets: newPlanets,
              url_next: data.next,
            });
          })
          .catch((err) => console.log(err));
      },
      fetchCharacters: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((response) => response.json())
          .then((data) =>
            setStore({ characters: data.results, url_next: data.next })
          )
          .catch((err) => console.log(err));
      },
      fetchMoreCharacters: () => {
        const store = getStore();
        fetch(store.url_next)
          .then((response) => response.json())
          .then((data) => {
            const newCharacters = [...store.characters, ...data.results];
            setStore({
              characters: newCharacters,
              url_next: data.next,
            });
          })
          .catch((err) => console.log(err));
      },
      fetchStarships: () => {
        fetch("https://www.swapi.tech/api/starships")
          .then((response) => response.json())
          .then((data) =>
            setStore({ starships: data.results, url_next: data.next })
          )
          .catch((err) => console.log(err));
      },
      fetchMoreStarships: () => {
        const store = getStore();
        fetch(store.url_next)
          .then((response) => response.json())
          .then((data) => {
            const newStarships = [...store.starships, ...data.results];
            setStore({
              starships: newStarships,
              url_next: data.next,
            });
          })
          .catch((err) => console.log(err));
      },
      fetchVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles")
          .then((response) => response.json())
          .then((data) =>
            setStore({ vehicles: data.results, url_next: data.next })
          )
          .catch((err) => console.log(err));
      },
      fetchMoreVehicles: () => {
        const store = getStore();
        fetch(store.url_next)
          .then((response) => response.json())
          .then((data) => {
            const newVehicles = [...store.vehicles, ...data.results];
            setStore({
              vehicles: newVehicles,
              url_next: data.next,
            });
          })
          .catch((err) => console.log(err));
      },
      fetchSpecies: () => {
        fetch("https://www.swapi.tech/api/species")
          .then((response) => response.json())
          .then((data) =>
            setStore({ species: data.results, url_next: data.next })
          )
          .catch((err) => console.log(err));
      },
      fetchMoreSpecies: () => {
        const store = getStore();
        fetch(store.url_next)
          .then((response) => response.json())
          .then((data) => {
            const newSpecies = [...store.species, ...data.results];
            setStore({
              species: newSpecies,
              url_next: data.next,
            });
          })
          .catch((err) => console.log(err));
      },
      fetchFilms: () => {
        fetch("https://www.swapi.tech/api/films")
          .then((response) => response.json())
          .then((data) => setStore({ films: data.result }))
          .catch((err) => console.log(err));
      },
      fetchSingle: async (section, id) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/${section}/${id}`
          );
          const data = await response.json();
          return data.result;
        } catch (error) {
          console.log(error);
        }
      },
      addToFavorites: (name, section, id) => {
        const store = getStore();
        const isAlreadyInFavorites = store.favorites.some(
          ([storedName, storedSection, storedId]) =>
            storedName === name && storedSection === section
        );
        if (!isAlreadyInFavorites) {
          setStore({ favorites: [...store.favorites, [name, section, id]] });
        }
      },
      removeFromFavorites: (idToRemove) => {
        const store = getStore();
        let newFavorites = store.favorites.filter(
          ([name, section, id]) => id !== idToRemove
        );
        setStore({ favorites: newFavorites });
      },
    },
  };
};

export default getState;
