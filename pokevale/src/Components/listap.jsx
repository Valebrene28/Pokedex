import React, { useContext } from "react";
import {PokemonContext} from "../Context/Context";
import { Card } from "./Card";


export const Listap = () => {
   const { allPokemons } = useContext(PokemonContext);
   
   return ( <>
    <div className='card-list-pokemon container'>
    {allPokemons.map(pokemon => (
     <Card pokemon={pokemon} key={pokemon.id} />
     ))}
    </div>
    </>
    
    )
  
   
  
    
   

  
   
};
