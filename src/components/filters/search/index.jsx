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
          
          data-[error=true]:border-red-700"
      />
      <label
        htmlFor="search-pokemon"
        className="text-white font-semibold capitalize
          bottom-3 left-7 absolute duration-300 

          group-focus-within:bottom-10
          group-focus-within:left-4
        "
      >
        buscar
      </label>
    </form>
  );
}
