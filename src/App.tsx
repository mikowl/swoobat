import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import pokemons from "./api/pokemons.json";
import FilterablePokedexTable from "./components/FilterablePokedexTable";

const queryClient = new QueryClient();

function App() {
  console.log('pokemons', pokemons[0])
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1 className="poke-title">Pokedex</h1>
        <FilterablePokedexTable pokemons={pokemons} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
