import { useState } from "react";
import { usePokemon, usePokemonList } from "../api/pokehooks";
import PokedexTable from "./PokedexTable";
import PokemonTypeSelection from "./PokemonTypeSelection";
import { Pokemon } from "./PokemonRow";

const FilterablePokedexTable = ({ pokemons }: { pokemons: Pokemon[] }) => {
  const [selectType, setSelectType] = useState<string | undefined>(undefined);
  console.log('usePokemonList', usePokemonList()); 
  console.log('usePokemon', usePokemon('pikachu'));
  

  return (
    <>
      <PokemonTypeSelection
        selectType={setSelectType}
        selectedType={selectType}
        pokemons={pokemons}
      />
      <PokedexTable
        pokemons={
          selectType
            ? pokemons.filter((pokemon) => pokemon.types.includes(selectType))
            : pokemons
        }
      />
    </>
  );
};

export default FilterablePokedexTable;
