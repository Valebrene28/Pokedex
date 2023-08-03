import React from 'react'
import { useContext } from 'react'
import { PokemonContext } from '../Context/Context'
import { useLocation } from 'react-router-dom'
import { Card } from '../Components'

export const Search = () => {

  // const location = useLocation()
  

  // const { globalPokemons } = useContext(PokemonContext)
  
  
  // const filterPokemons = globalPokemons?.filter(pokemon =>
  //    pokemon.name.includes(location.state))
  // return (
  //   <div className='container'>
	// 		<p className='p-search'>
	// 			Se encontraron <span>{filterPokemons?.length}</span>{' '}
	// 			resultados:
	// 		</p>
	// 		<div className='card-list-pokemon container'>
	// 			{filterPokemons?.map(pokemon => (
	// 				<Card pokemon={pokemon} key={pokemon.id} />
	// 			))}
	// 		</div>
	// 	</div>
	// );
};
  

