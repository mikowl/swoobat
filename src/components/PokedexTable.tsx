import PokemonRow, { Pokemon } from "./PokemonRow";

const PokedexTable = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full text-black min-w-[540px]">
          <thead className="text-[#003a70]">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Types</th>
              <th>Sprite</th>
            </tr>
          </thead>
          <tbody>
            <PokemonRow pokemons={pokemons} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PokedexTable;
