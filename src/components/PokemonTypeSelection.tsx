import React from "react";
import { Pokemon } from "./PokemonRow";

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
  pokemons: Pokemon[];
};

const PokemonTypeSelectionProps = ({
  selectedType,
  selectType,
  pokemons,
}: PokemonTypeSelectionProps) => {
  const renderedTypes: string[] = [];
  return (
    <>
      <select
        value={selectedType}
        onChange={(e) =>
          selectType(e.target.value === "all" ? undefined : e.target.value)
        }
        className="select w-full text-[#326fba] my-4 w-2/3 bg-opacity-90 capitalize"
        defaultValue={"filter-by-type"}
      >
        <option value="filter-by-type" disabled>
          Filter by type
        </option>
        <option value="all">All</option>

        {pokemons.map((pokemon) => {
          return (
            <React.Fragment key={pokemon.id}>
              {pokemon.types.map((type) => {
                if (renderedTypes.includes(type)) {
                  return null;
                }
                renderedTypes.push(type);
                return (
                  <option key={type} className={`pokemon-type ${type}`}>
                    {type}
                  </option>
                );
              })}
            </React.Fragment>
          );
        })}
      </select>
      {/* <button onClick={() => selectType(undefined)}>Clear</button> */}
    </>
  );
};

export default PokemonTypeSelectionProps;
