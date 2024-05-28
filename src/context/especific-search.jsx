/* eslint-disable no-param-reassign */
import React from 'react'

export const SearchPokemonContext = React.createContext()

// eslint-disable-next-line react/prop-types
export function SearchPokemonProvider({ children }) {
  const [pokemonsListFlag, setPokemonsFlag] = React.useState([])
  const [pokemonsList, setPokemons] = React.useState([])
  const [searcText, setSearcText] = React.useState([])
  const [typeOfsearch, setTypeOfsearch] = React.useState('')
  const [listOfType, setListOfType] = React.useState([])
  const [listOfAbilities, setListOfAbilities] = React.useState([])

  const handleTypeOfsearch = (type) => {
    setTypeOfsearch((prev) => {
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
      setSearcText(newListPokemon.sort())
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
        setPokemons((prev) => {
          prev = pokemons
          return prev
        })
        setPokemonsFlag((prev) => {
          prev = pokemons
          return prev
        })
        return pokemons
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
    if (typeOfsearch) {
      for (const item in typeOfsearch) {
        setPokemons(
          pokemonsListFlag.filter((pokemon) =>
            pokemon[item].includes(typeOfsearch[item]),
          ),
        )
      }
    }
  }, [pokemonsListFlag, typeOfsearch])

  const handleHitsPoint = () => {
    const orderByPoint = pokemonsList.sort((a, b) => b.hitpoints - a.hitpoints)
    console.log(orderByPoint)
    setPokemons(orderByPoint)
  }

  const returnProvider = {
      typeOfsearch,
      handleTypeOfsearch,
      pokemonsList: searcText.length > 0 ? searcText : pokemonsList,
      searchByText,
      listOfType,
      listOfAbilities,
      handleHitsPoint,
  }

  return (
    <SearchPokemonContext.Provider value={returnProvider}>
      {children}
    </SearchPokemonContext.Provider>
  )
}
