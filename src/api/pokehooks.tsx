
import { useQuery } from "react-query";
import axios from "axios";

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

const fetchPokemons = async () => {
  const { data } = await axios.get(
    `${POKE_API_URL}?limit=10000`,
  );
  return data.results;
}

const getPokemonByName = async (name: string) => {
  const { data } = await axios.get(
    `${POKE_API_URL}/${name}`
  );
  return data;
}

const usePokemonList = () => {
  return useQuery("pokemon", fetchPokemons);
}

const usePokemon = (name: string) => {
  return useQuery(["pokemon", name], () => getPokemonByName(name));
}

export { usePokemon, usePokemonList };


