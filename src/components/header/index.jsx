import React from 'react'

import { InputTextSearch } from '../filters/search'
import SpecificSearch from '../filters/specific-search'
import ClearFilterButton from '../utils/button/clear-filter'
import { SearchPokemonContext } from '../../context/especific-search'

function Header() {
  const { clearFilter } = React.useContext(SearchPokemonContext)
  return (
    <div
      className=" w-[300px] flex flex-col justify-center gap-8 
      items-center fixed left-0 top-0 h-full shadow-component-sw 
      bg-slate-900
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
      <ClearFilterButton 
        text='Limpar Filtro' 
        action={() => clearFilter()} 
        className="bg-water py-2 px-12 rounded-2xl text-ice font-medium"  
      />
    </div>
  )
}

export default Header
