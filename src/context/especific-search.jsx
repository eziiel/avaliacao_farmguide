import React from "react"

export const SearchPokemonContext = React.createContext()

//possivel tipo de estrutura do estado de pesquisa//
// search = {
//   specific = "busca especifica" ---- tipo | habilidade | hitpoint
//   seach = 'name' ---- quando pesquisa pelo nome
// }


// eslint-disable-next-line react/prop-types
export const SearchPokemonProvider = ({ children }) => {
  const [typeOfsearch, setTypeOfsearch] = React.useState('')

  const handleTypeOfsearch = (type) => {
    console.log('contexto', type)
    setTypeOfsearch(prev => {
      prev = type

      return prev
    })
  }

  const returnProvider = {
    typeOfsearch,
    handleTypeOfsearch
  }

  return (
    <SearchPokemonContext.Provider value={returnProvider}>
      {children}
    </SearchPokemonContext.Provider>
  )
}
