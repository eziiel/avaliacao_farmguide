import React from 'react'

import { InputTextSearch } from '../filters/search'
import SpecificSearch from '../filters/specific-search'

function Header() {
  return (
    <div
      className=" w-[300px] flex flex-col justify-center gap-8 
      items-center fixed left-0 top-0 h-full shadow-component-sw bg-slate-800
    "
    >
      <img
        alt="imagem de uma pokebola - metade vermelha e metada branca com uma lista no meio"
        src={'/img/pokeball.png'}
        className="w-[100px] h-[100px] "
      />
      <div className="flex flex-col gap-4">
        <InputTextSearch />

        <SpecificSearch />
      </div>
    </div>
  )
}

export default Header
