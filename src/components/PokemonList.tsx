import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pokemon, Result } from "../types/pokemon"
import PokeCard from "./PokeCard";
import Loading from "./Loading";

interface PokemonResults {
  pokemonList: Pokemon[];
  loading: boolean;
  totalPages: number;
}

const PokemonList: React.FC = () => {
  const [{ pokemonList, totalPages, loading }, setResults] = useState<PokemonResults>({
    pokemonList: [],
    loading: true,
    totalPages: 0,
  });

  const [page, setPage] = useState(0);

  const getPokemonList = async () => {
    const limit = 24;
    const offset = 24 * page;
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;

    try {
      //fetch pokemon list
      const response = await fetch(url);
      const data = await response.json();

      // get all pokemons data
      const promises = data.results.map(async (pokemon: Result) => {
        try {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      });
      const results = await Promise.all(promises);
      console.log('results', results);
      return results;
    } catch (error) {
      console.warn('error', error);
    }
  };

  // set useQuery to fetch the pokemon list
  const {
    data,
    isInitialLoading,
    error,
    isPreviousData,
  } = useQuery({
    queryKey: ["pokemonList", page],
    queryFn: getPokemonList,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 60 * 24,
  }
  );

  const Spinner = () => (
    <div role="status">
      <svg className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="6"></circle>
      </svg>
    </div>
  );

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      {isInitialLoading ? (
        <Loading />
      ) : (
          <>
            <h1 className="poke-title mb-8 mt-2">Pokedex</h1>
            <div className="grid max-w-[1100px] justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-wrap">
            {(data as Pokemon[]).map((pokemon) => (
              <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))}
            </div>
            <div className="pagination flex justify-between mb-4 mt-10">
              <button className="btn btn-secondary" onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 0}>
                Previous
              </button>{' '}
              <div className="flex items-center flex-col -translate-y-4 ">
                <small className="text-green-900 uppercase font-semibold">Page</small>
                <span className={`flex items-center justify-center bg-[#f24646] w-12 h-12 border-white border-solid border-2 rounded-full font-bold py-[10px] px-[17px] shadow-sm text-white inline-block`}>
                  {isPreviousData ? <Spinner /> : page + 1 }
                </span>
              </div>
              <button
                className="btn btn-secondary relative"
                onClick={() => {
                  if (!isPreviousData && data) {
                    setPage(old => old + 1);
                    // Not sure why this needs to be in a timeout but the smooth scroll doesn't work without it
                    setTimeout(scrollToTop, 500);
                  }
                }}
                disabled={isPreviousData}
              >
                Next
              </button>
            </div>
          </>
      )}
    </div>
  );
};

export default PokemonList;
