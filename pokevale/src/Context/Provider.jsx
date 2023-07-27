import { useEffect, useState } from "react";
import pokemonContext from "./Context";
import useForm from "../Hook/useform";



 export const Save = ({ children }) => {


  const [allPokemons, setallPokemons] = useState([]);
  const [globalPokemons, setglobalPokemons] = useState([])
 

  const [offset, setOffset] = useState(0);

//////////////HOOK///////////////

const {valueSearch, change, reset} = useForm({
valueSearch: ""



})

  ///////LOADING///////
  const [loading, setloading] = useState(true)
  const [active, setactive] = useState(false)




//////////////////LIMITE POKEMONES/////////////////////////////////////////////////////

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
    setallPokemons([
      ...allPokemons,
      ...results
    ]);
    setloading(false)
  };

///////////////////TODOS POKEMONES///////////////////////////////////////////////

  const getGlobalPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseURL}pokemon?limit=100&offset=0`);
    const data = await res.json();

    const trust = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data; 
    });
    const results = await Promise.all(trust);
    setglobalPokemons(results);
    setloading(false)
    };

    ////////////LLAMAR POR ID////////////////////
    const savePokemonsById = async(id) => {
      const baseURL = "https://pokeapi.co/api/v2/";
      const res = await fetch(`${baseURL}pokemon/${id}`);
      const data = await res.json()
      return data
    }


    useEffect(() => {
      savePokemons();
    }, []);

    useEffect(() => {
      getGlobalPokemons();
    }, []);

    return (
      <pokemonContext.Provider
        value={{
          valueSearch,
          change,
          reset,
          savePokemons,
          getGlobalPokemons,
          savePokemonsById
        }}
      >
        {children}
      </pokemonContext.Provider>
    );
  };


  