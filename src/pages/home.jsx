import Header from '../components/header'
import MainPokemons from '../components/pokemons/main'
import { SearchPokemonProvider } from '../context/especific-search'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden

    ">
      <SearchPokemonProvider>
        <Header />
        <MainPokemons />
      </SearchPokemonProvider>
    </div>
  )
}
