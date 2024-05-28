import React from 'react'
import { SearchPokemonContext } from '../../../context/especific-search'
import CardPokemon from '../card'

export default function MainPokemons() {
  const { pokemonsList } = React.useContext(SearchPokemonContext)

  return (
    <main
      className="bg-slate-900 flex-1 flex justify-around 
      gap-4 flex-col items-center ml-[300px]
    "
    >
      <header className="w-full h-[150px] border-b-2 flex-1
        flex justify-between items-end shadow-component-header
      ">
        <img 
          src="/img/pikachu.gif" 
          alt="imagem do pikachu correndo da esquerda para direita" 
          className='animate-waving-hand-ten w-[150px] h-[150px]'
        />
      </header>
      <div className="w-2/3 p-8 grid gap-16 min-h-[700px] flex-auto
          screen1050:grid-cols-2
      ">
        {pokemonsList.map((pokemon) => (
          <CardPokemon
            key={pokemon.id}
            pokemon={pokemon.pokemon}
            type={pokemon.type}
            image_url={pokemon.image_url}
            hitpoints={pokemon.hitpoints}
            abilities={pokemon.abilities}
          />
        ))}
      </div>
    </main>
  )
}
