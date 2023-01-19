import { Pokemon } from "../types/pokemon";

const PokeCard = ({ pokemon }: { pokemon: Pokemon }) => {
  // handle card flip
  const handleCardFlip = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    card.classList.toggle("active");
  };

  return (
    <div className="flip" onClick={handleCardFlip}>
      <div className="front">
        <div className={`bg-white shadow-md text-secondary bg-opacity-60 px-2 py-2 rounded-xl transition-all hover:rotate-3 hover:-translate-y-1`}>
          <div className="h-[330px] bg-blue-200 p-3 relative rounded bg-opacity-70">
            <small className="poke-id">#{pokemon.id}</small>
            <h3 className="poke-name capitalize font-bold">{pokemon.name} </h3>
            <img loading="eager" className="ml-auto mr-auto mb-3" width="175" height="175" src={pokemon.sprites.other?.["official-artwork"].front_default} alt={pokemon.name} />
            {pokemon.types.map((type) => (
              <span key={type.slot} className={`pokemon-type ${type.type.name}`}>{type.type.name}</span>
            ))}
            <p className="text-sm leading-5 mt-3 mb-2">
              <b>Abilities: </b>
              {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
            </p>
            {/* <p className="text-sm font-medium mt-2"> Base exp: {pokemon.base_experience} </p> */}
          </div>
        </div>
      </div>
      <div className="back">
        <div key={pokemon.id} className={`bg-white shadow-md text-secondary bg-opacity-60 px-2 py-2 rounded-xl transition-all`}>
          <div className="h-[330px] bg-blue-200 p-3 rounded">
          <h3 className="capitalize mb-2 font-bold">{pokemon.name} <small className="text-xs">#{pokemon.id}</small></h3>
          <img loading="lazy" className="ml-auto mr-auto" width="96" height="96" src={pokemon.sprites.back_default} alt={pokemon.name} />
            <h4 className="font-bold text-left border-b-2 border-blue-300 -mt-2">Stats</h4>
            <ul className="p-0">
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name} className="text-secondary m-1 text-left leading-4 font-semibold text-sm">{stat.stat.name}: {stat.base_stat}</li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
