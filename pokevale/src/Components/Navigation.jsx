import React, { useContext, useState } from 'react'
import { Link, Outlet, useNavigate, useNavigation } from 'react-router-dom'
import { PokemonContext } from '../Context/Context'
import image from "../imagen/image.png"
import { Card } from './Card'


export const Navigation = () => {
	
	const [searchPokemon, setsearchPokemon] = useState("")
	const [pokemon, setpokemon] = useState({})
	const [isSearch, setisSearch] = useState(false)


	const onSearch = async() => {
		const baseURL = "https://pokeapi.co/api/v2/";
		const res = await fetch(`${baseURL}pokemon/${searchPokemon}`);
		const data = await res.json()
		.then(resp => {
			 setisSearch(true)													
			 setpokemon(resp)
			console.log(resp)
		});
		
		
	}

		
	const handleinput = (e) => {
		setsearchPokemon(e.target.value.toLowerCase().trim())

	}
	
	
//////////////////////
	const onSearchSubmit = async (e) => {
		e.preventDefault();
		const data = await onSearch(searchPokemon)
		
		
		
		

	}
  return (
    <>
        <header className='container'>
				  <Link to= "/">
					<img
						src={image}
						alt='Logo Pokedex'
					/>
				</Link>

				<form onSubmit={onSearchSubmit}>
					<div className='form-group'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='icon-search'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
						<input

                            className='inputSearch'
							type='search'
							name='valueSearch'
							id=''
							value={searchPokemon}
							onChange={handleinput}
							placeholder='Buscar nombre de pokemon'
						/>
					</div>

					<button className='btn-search' onClick={onSearch}>Buscar</button>
				</form>
				{isSearch ? <Link to={`/pokemon/${pokemon?.id}`} className='card-pokemon'>
    <div className='card-img'>
      <img
        src={pokemon?.sprites.other.dream_world.front_default}
        alt={`Pokemon ${pokemon?.name}`}
      />
    </div>
    <div className='card-info'>
    <span className='pokemon-id'>N° {pokemon?.id}</span>
      <h3>{pokemon?.name}</h3>
      <div className='card-types'>
        {pokemon?.types.map(type => (
          <span key={type?.type.name} className={type?.type.name}>
            {type?.type.name}
          </span>
        ))}
      </div>
    </div>
  </Link>
  : 
		<Card />
				}
			</header>

			<Outlet />
    
    </>
  )
}
