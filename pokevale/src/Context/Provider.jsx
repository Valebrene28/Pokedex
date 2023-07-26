import { useEffect, useState } from "react";
import pokemonContext from "./Context";

export const Save = ({ children }) => {
  const [allPokemons, setallPokemons] = useState([]);
  const [globalPokemons, setglobalPokemons] = useState([]);

  const [offset, setOffset] = useState(0);
  const savePokemons = async (limit = 20) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const trust = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(trust);
    setallPokemons(results);
  };

  const getGlobalPokemons = async () => {
    const [allPokemons, setallPokemons] = useState([]);

    const [offset, setOffset] = useState(0);
    const savePokemons = async (limit = 20) => {
      const baseURL = "https://pokeapi.co/api/v2/";
      const res = await fetch(
        `${baseURL}pokemon?limit=${limit}&offset=${offset}`
      );
      const data = await res.json();

      const trust = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });
      const results = await Promise.all(trust);
      setallPokemons(results);
    };

    useEffect(() => {
      savePokemons();
    }, []);

    return (
      <pokemonContext.Provider
        value={{
          numero: 0,
        }}
      >
        {children}
      </pokemonContext.Provider>
    );
  };
};
