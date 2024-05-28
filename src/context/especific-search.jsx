/* eslint-disable no-param-reassign */
import React from 'react'

export const SearchPokemonContext = React.createContext()

// eslint-disable-next-line react/prop-types
export function SearchPokemonProvider({ children }) {
  const [pokemonsListFlag, setPokemonsFlag] = React.useState([])
  const [pokemonsList, setPokemons] = React.useState([])
  const [searchText, setSearchText] = React.useState([])
  const [typeOfSearch, setTypeOfSearch] = React.useState('')
  const [listOfType, setListOfType] = React.useState([])
  const [listOfAbilities, setListOfAbilities] = React.useState([])

  const handleTypeOfsearch = (type) => {
    setTypeOfSearch((prev) => {
      prev = type
      return prev
    })
  }

  // eslint-disable-next-line consistent-return
  function searchByText(text) {
    if (text.length > 0) {
      const newListPokemon = pokemonsList?.filter((pokemon) =>
        pokemon.pokemon.toLowerCase().includes(text.toLowerCase()),
      )
      setSearchText(newListPokemon.sort())
    } else {
      return pokemonsListFlag
    }
  }

  const handleTypeSpecific = (arr) => {
    const clearTypes = arr.filter((item, index) => {
      return arr.indexOf(item) === index
    })
    setListOfType(clearTypes)
  }

  const handleAbilitisSpecific = (arr) => {
    const clearAbilities = arr.filter((item, index) => {
      return arr.indexOf(item) === index
    })
    setListOfAbilities(clearAbilities)
  }

  React.useEffect(() => {
    const requestPokemons = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/pokemon')
        const pokemons = await response.json()

        const orderedResponse = pokemons.sort((a, b) => {
          const first = a.pokemon.toLowerCase();
          const second = b.pokemon.toLowerCase();
        
          if (first < second) {
            return -1;
          }
          if (first > second) {
            return 1;
          }
          return 0;
        });
        setPokemons((prev) => {
          prev = orderedResponse
          return prev
        })
        setPokemonsFlag((prev) => {
          prev = orderedResponse
          return prev
        })
        return orderedResponse
      } catch (err) {
        return err
      }
    }
    requestPokemons()
  }, [])

  React.useEffect(() => {
    const typesFeatch = pokemonsListFlag.reduce((acc, pokemon) => {
      const types = pokemon.type.split('/')

      acc.push(...types)
      return acc
    }, [])
    handleTypeSpecific(typesFeatch)
  }, [pokemonsListFlag])

  React.useEffect(() => {
    const typesFeatch = pokemonsListFlag.reduce((acc, pokemon) => {
      acc.push(...pokemon.abilities)
      return acc
    }, [])
    handleAbilitisSpecific(typesFeatch)
  }, [pokemonsListFlag])

  React.useEffect(() => {
    if (typeOfSearch) {
      for (const item in typeOfSearch) {
        setPokemons(
          pokemonsListFlag.filter((pokemon) =>
            pokemon[item].includes(typeOfSearch[item]),
          ),
        )
      }
    }
  }, [pokemonsListFlag, typeOfSearch])

  const handleHitsPoint = () => {
    const sortedPokemons = [...pokemonsList].sort((a, b) => b.hitpoints - a.hitpoints);
    setPokemons(sortedPokemons);
  }

  const clearFilter = () => {
    setSearchText([])
    setTypeOfSearch('')
    setPokemons(pokemonsListFlag);
  }

  const returnProvider = {
     typeOfSearch,
      handleTypeOfsearch,
      pokemonsList: searchText.length > 0 ? searchText : pokemonsList,
      searchByText,
      listOfType,
      listOfAbilities,
      handleHitsPoint,
      clearFilter
  }

  return (
    <SearchPokemonContext.Provider value={returnProvider}>
      {children}
    </SearchPokemonContext.Provider>
  )
}
