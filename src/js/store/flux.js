export const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      url_next: "",
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
    },
  };
};

export default getState;
