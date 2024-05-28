/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'

export default function CardPokemon({ pokemon, type, image_url, hitpoints }) {
  return (
    <section
      className="max-h-[300px] min-h-[300px] rounded-3xl flex flex-col
        relative border-[4px]  shadow-component-sw
        hover:scale-110 group duration-300 
        border-red-700 bg-red-700
      "
    >
      <div className="flex flex-1 justify-around rounded-3xl items-center bg-white peer">
        <div className="flex flex-col">
          <span>type</span>
          <span>{type}</span>
        </div>
        <img
          src={image_url}
          alt={`imagem de um pokemon - ${pokemon}`}
          className="w-[200px] h-[200px] duration-300 
            group-hover:scale-125
            group-hover:z-40 
          "
        />
      </div>
      <aside
        className="p-2 text-white z-40 bg-red-700 absolute 
        w-[150px] -left-3 -top-4 rounded-full flex gap-4 justify-center 
        items-center
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
        className="absolute h-1/4 w-full bottom-0 left-0 bg-red-700
        flex justify-center items-center rounded-b-xl p-4 duration-300

        group-hover:justify-start
       "
      >
        {/* <h1 className="font-bold text-white duration-300 ">{pokemon}</h1> */}
      </footer>
    </section>
  )
}
