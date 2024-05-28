import React from "react"
import { SearchPokemonContext } from "../../../context/especific-search"

export const InputTextSearch = () => {
  const { searchByText } = React.useContext(SearchPokemonContext)

  const handleSearchPokemon = (text) => {
    searchByText(text)
  }

  return (
    <form 
      className="flex flex-col p-2"
    >
      <label htmlFor="search-pokemon">buscar</label>
      <input 
        name="search-pokemon"
        id="search-pokemon"
        onChange={(e) => handleSearchPokemon(e.target.value)}
        type="text" 
      />
    </form>
  )
}
