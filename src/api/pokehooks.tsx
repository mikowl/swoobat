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

const getCardColor = (type: string) => {
	switch (type) {
		case "grass":
			return "bg-green-200";
		case "fire":
			return "bg-orange-200";
		case "water":
			return "bg-blue-200";
		case "bug":
			return "bg-lime-200";
		case "normal":
			return "bg-gray-200";
		case "poison":
			return "bg-purple-200";
		case "electric":
			return "bg-yellow-200";
		case "ground":
			return "bg-[#cebb8db3]";
		case "fairy":
			return "bg-pink-200";
		case "fighting":
			return "bg-red-200";
		case "psychic":
			return "bg-pink-200";
		case "rock":
			return "bg-yellow-200";
		case "ghost":
			return "bg-gray-200";
		case "ice":
			return "bg-blue-200";
		case "dragon":
			return "bg-emerald-200";
		case "flying":
			return "bg-sky-200";
		case "dark":
			return "bg-gray-200";
		case "steel":
			return "bg-gray-200";
		default:
			return "bg-gray-200";
	}
};

export { getPokemonList, usePokemon, getCardColor };
