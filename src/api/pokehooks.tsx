import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Pokemon } from "../types/pokemon";
import axios from "axios";

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemon = async (id: string) => {
  let result: Pokemon = {} as Pokemon;
  const data = await axios.get<Pokemon>(`${POKE_API_URL}/pokemon/${id}`);
  if (data.status === 200) {
    result = data.data;
  }
  return result;
};

function usePokemon(id: string): UseQueryResult<Pokemon, Error> {
  return useQuery(["pokemon", id], () => getPokemon(id), {
    enabled: true,
    refetchOnWindowFocus: false,
  });
}
const fetchPokemons = async ({
  pageParam = `${POKE_API_URL}?offset=0&limit=24`
}) => {
  const request = await fetch(pageParam);
  const { results, next } = await request.json();
  return { response: results, nextPage: next };
}

const getPokemonByName = async (name: string) => {
  const { data } = await axios.get(
    `${POKE_API_URL}/${name}`
  );
  return data;
}

const getPokemonByUrl = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
}

const getPokemonDetails = async (names: string[]) => {
  const details = await axios.get(`${POKE_API_URL}/${names.join(",")}`);
  return details.data;
}

const usePokemonList = () => {
  return useQuery({ queryKey: ['pokemonList'], queryFn: fetchPokemons })
}

const usePokemonByUrl = (url: string) => {
  return useQuery({ queryKey: ["pokemonByUrl", url], queryFn: () => getPokemonByUrl(url) });
}

export { usePokemon, usePokemonList, usePokemonByUrl, fetchPokemons, getPokemon, getPokemonByName, getPokemonDetails };


