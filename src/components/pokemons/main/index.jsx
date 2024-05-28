import React from "react";
import { CardPokemon } from "../card";
import { SearchPokemonContext } from "../../../context/especific-search";




export default function MainPokemons() {
  const { pokemonsList } = React.useContext(SearchPokemonContext)
  return (
    <main className="bg-slate-800 flex-1 flex justify-around 
      gap-4 flex-col pt-32 
      items-center ml-[300px]
    ">
      <div className="w-2/3 h-40 bg-blue-700 p-4"> 

        alt content
      </div>
      <div className="w-2/3 p-8 grid grid-cols-2 gap-16 min-h-[700px]"> 

        {pokemonsList.map((pokemon) => (
          <CardPokemon 
            key={pokemon.id}
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
