import Header from '../components/header'
import MainPokemons from '../components/pokemons/main'
import { SearchPokemonProvider } from '../context/especific-search'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <SearchPokemonProvider>
        <Header />
        <MainPokemons />
      </SearchPokemonProvider>
    </div>
  )
}
