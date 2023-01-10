export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}
const PokemonRow = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <tr className="pokemon-row" key={pokemon.id}>
            <td>{pokemon.id}</td>
            <td>{pokemon.name}</td>
            <td>
              {pokemon.types.map((type) => (
                <span key={type} className={`pokemon-type ${type}`}>
                  {type}
                </span>
              ))}
            </td>
            <td>
              <img src={pokemon.sprite} width="60" height="60" alt={pokemon.name} />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default PokemonRow;
