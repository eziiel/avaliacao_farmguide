import React from "react"
import { SearchPokemonContext } from "../../../context/especific-search"

export default function SpecificSearch() {
  const { handleTypeOfsearch } = React.useContext(SearchPokemonContext)

  return (
    <div className="flex flex-col gap-4">
      <div className="py-2 px-12 flex justify-center items-center bg-yellow-600
          rounded-xl cursor-pointer
        "
        onClick={() => handleTypeOfsearch('Water')}
      >
        tipo
      </div>
      <div className="py-2 px-12 flex justify-center items-center bg-yellow-600
          rounded-xl cursor-pointer
        "
        onClick={() => handleTypeOfsearch('Flying')}
      >
        habilidade
      </div>
      <div className="py-2 px-12 flex justify-center items-center bg-yellow-600
          rounded-xl cursor-pointer
        "
        onClick={() => handleTypeOfsearch('Rock')}
      >
        hitpoint
      </div>
    </div>
  )
}


