import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Pokemon, Result } from "../types/pokemon";
import axios from "axios";

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemonList = async (page: number) => {
	const limit = 24;
	const offset = 24 * page;
	const url = `${POKE_API_URL}/?limit=${limit}&offset=${offset}`;

	try {
		//fetch pokemon list
		const { data } = await axios.get(url);

		// get all pokemons data
		const promises = data.results.map(async (pokemon: Result) => {
			try {
				const { data } = await axios.get(pokemon.url);
				return data;
			} catch (error) {
				console.log(error);
			}
		});
		const results = await Promise.all(promises);
		console.log("results", results);
		return results;
	} catch (error) {
		console.warn("error", error);
	}
};

const usePokemon = (page: number): UseQueryResult<Pokemon[], Error> => {
	return useQuery({
		queryKey: ["pokemonList", page],
		queryFn: () => getPokemonList(page),
		keepPreviousData: true,
		staleTime: 1000 * 60 * 60 * 24,
	});
};

export { getPokemonList, usePokemon };
