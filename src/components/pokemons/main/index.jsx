import React from "react";
import { CardPokemon } from "../card";
import { SearchPokemonContext } from "../../../context/especific-search";




export default function MainPokemons() {
  const { typeOfsearch } = React.useContext(SearchPokemonContext)

  
  const [pokemonsList, setPokemons] = React.useState([])
  // const [searchPokemonsListForType, setSearchPokemonsListForType] = React.useState()


  React.useEffect(() => {
    const requestPokemons = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/pokemon')
        const pokemons = await response.json()
        setPokemons(prev => {
          prev = pokemons
          return prev
        })
        return pokemons
      } catch (err) {
        return err
      }
    }
    requestPokemons()
  }, [])

  React.useEffect(() => {
    if(typeOfsearch.length >= 0) {
      const filtered = pokemonsList.filter(pokemon => pokemon.type.includes(typeOfsearch))
      setPokemons(filtered)
    }
  }, [typeOfsearch])
  
  return (
    <main className="bg-slate-800 flex-1 flex justify-around 
      gap-4 flex-col pt-32
      items-center ml-[300px]
    ">
      <div className="w-2/3 h-40 bg-blue-700 p-4"> 

        alt content
      </div>
      <div className="w-2/3 p-8 grid grid-cols-2 gap-8"> 

        {pokemonsList.map((pokemon) => (
          <CardPokemon 
            key={pokemon.pokemon}
            pokemon={pokemon.pokemon}
            type={pokemon.type}
            image_url={pokemon.image_url}
            hitpoints ={pokemon.hitpoints  }
          />

        ))}
      </div>
    </main>
  )
}
