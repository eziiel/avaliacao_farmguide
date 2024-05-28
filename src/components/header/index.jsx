import React from 'react'

import { InputTextSearch } from '../filters/search'
import SpecificSearch from '../filters/specific-search'
import ClearFilterButton from '../utils/button/clear-filter'
import { SearchPokemonContext } from '../../context/especific-search'

function Header() {
  const { clearFilter } = React.useContext(SearchPokemonContext)
  return (
    <header
      className=" w-full flex justify-center gap-8 p-8
      items-center h-full shadow-component-sw 
      bg-slate-900 duration-100
      screen800:w-[300px]
      screen800:fixed
      screen800:flex-col
      screen800:left-0 
      screen800:top-0

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
      <ClearFilterButton 
        text='Limpar Filtro' 
        action={() => clearFilter()} 
        className="bg-water p-2 w-full  rounded-2xl text-ice font-medium"  
      />
      </div>
    </header>
  )
}

export default Header
