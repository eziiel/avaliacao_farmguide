import React from 'react';
import { SearchPokemonContext } from '../../../context/especific-search';

export function InputTextSearch() {
  const { searchByText } = React.useContext(SearchPokemonContext);

  const handleSearchPokemon = (text) => {
    searchByText(text);
  };

  return (
    <form className="flex flex-col p-2 group antialiased relative">
      <input
        name="search-pokemon"
        id="search-pokemon"
        onChange={(e) => handleSearchPokemon(e.target.value)}
        type="text"
        className="text-ice w-full p-2 text-sm bg-transparent
          outline-none border-b relative
          peer
        "
      />
      <label
        htmlFor="search-pokemon"
        className="text-white capitalize
          bottom-3 left-7 

          cursor-pointer transform transition-all duration-300 
          absolute top-0 v h-full flex items-center pl-6
          text-sm truncate overflow-hidden w-full
          text-font-blue-dark font-semibold antialiased
          
          group-focus-within:text-xs 
          group-focus-within:font-bold
          group-focus-within:-translate-y-full
          group-focus-within:h-1/2 
          group-focus-within:left-0
          group-focus:h-1/2
          group-focus:bg-red-500
          
          peer-valid:font-semibold 
          peer-valid:text-xs 
          peer-valid:h-1/3
          peer-valid:left-0
        "
      >
        buscar
      </label>
    </form>
  );
}
