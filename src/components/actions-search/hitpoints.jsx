import React from 'react'
import { SearchPokemonContext } from '../../context/especific-search'

export default function Hitpoints() {
  const { handleHitsPoint } = React.useContext(SearchPokemonContext)

  return (
    <button
      type="button"
      className="py-2 px-12 flex justify-center items-center 
      bg-slate-300 rounded-xl cursor-pointer relative 
        shadow-component-sw
      "
      onClick={() => {
        setOpenType(false)
        setOpenAbilities(false)
        handleHitsPoint()
      }}
    >
      hitpoint
    </button>
  )
}
