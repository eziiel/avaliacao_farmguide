/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import CardPokemonDialog from '../../../assets/card-pokemon-dialog'

export default function CardPokemon({ pokemon, type, image_url, hitpoints, abilities }) {
  
  return (
    <section
      className="max-h-[320px] min-h-[300px] rounded-3xl flex flex-col
        relative shadow-component-sw min-w-[300px]
        hover:scale-110 group duration-300
      "
    >
      <div className="flex flex-1 justify-around rounded-3xl items-center
       bg-white duration-300 border-[3px] p-4
        hover:shadow-[inset_0_4px_20px_rgba(1,1,1,1)]
        peer
       ">
        <div className="flex flex-col gap-2 font-medium text-xs">
          <div className='flex gap-2'>
            <span>type:</span>
            <span>{type}</span>
          </div>
          <div className='flex gap-2 flex-col
            screen800:flex-row
            screen1050:flex-col
            screen1400:flex-row


          '>
            <span>habilidades:</span>
            <span>{abilities}</span>
          </div>
        </div>
        <div className=' delay-300
          group-hover:before:content-[""] 
          group-hover:before:absolute 
          group-hover:before:w-[150px]
          group-hover:before:h-[0,1px]
          group-hover:before:bg-black
          group-hover:before:top-3/4
          group-hover:before:right-1/5
          group-hover:before:bg-radial-gradient
          group-hover:before:shadow-card-img
          group-hover:before:z-0

        '>
          <img
            src={image_url}
            alt={`imagem de um pokemon - ${pokemon}`}
            className="w-[200px] h-[200px] duration-300 
              z-40 
              group-hover:scale-125
              group-hover:z-50
            "
          />
        </div>
      </div>
      <aside
        className="p-2 text-white z-40 bgpsychic absolute 
        w-[150px] -left-3 -top-4 rounded-full flex gap-4 justify-center 
        items-center shadow-component-sw bg-psychic
        
      "
      >
        <img
          src="/img/hp.png"
          alt="imagem de um pote com líquido vermelho representado a 
            quantidade de vida"
          className="w-[40px] h-[40px]"
        />
        <strong>{hitpoints}</strong>
      </aside>
      <footer
        className="absolute h-1/5 w-full bottom-0 left-0 bg-psychic
        flex justify-center items-center rounded-b-xl p-4 duration-300
        border-[3px] gap-8
        group-hover:pr-28
       "
      >
        <h1 className="font-bold text-white ">{pokemon}</h1>
        <CardPokemonDialog />
      </footer>
    </section>
  )
}
