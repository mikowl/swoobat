import { useState } from "react";
import { Pokemon } from "../types/pokemon";
import getCardColor from "../utils/pokecolors";
import getPokeIcon from "../utils/icontypes";

const PokeCard = ({ pokemon }: { pokemon: Pokemon }) => {
	// handle card flip
	const handleCardFlip = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const card = e.currentTarget;
		card.classList.toggle("active");
	};

	const [imgLoaded, setImgLoaded] = useState<boolean>(false);
	const pTypes = pokemon.types.map((type) => type.type.name);
	const cardColor = pTypes.map(getCardColor);

	return (
		<div className="flip" onClick={handleCardFlip}>
			<div className="front">
				<div
					className={`${cardColor[0]} bg-shadow-md bg-bg-text-secondary rounded-xl bg-opacity-80 px-2 py-2 transition-all hover:-translate-y-1 hover:rotate-3`}
				>
					<div className={`h-[330px] ${cardColor[1]} relative rounded bg-opacity-80 p-3`}>
						<small className="poke-id">#{pokemon.id}</small>
						<span className="type-icons">{pokemon.types.map((type) => getPokeIcon(type.type.name))}</span>
						<h3 className="poke-name font-bold capitalize">{pokemon.name} </h3>
						{/* <p className="mt-2 text-sm font-medium base-exp exp">
							Base exp: {pokemon.base_experience}
						</p> */}
						<img
							className={`mb-3 ml-auto mr-auto transition-all duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
							width="175"
							height="175"
							src={pokemon.sprites.other?.["official-artwork"].front_default}
							onLoad={() => setImgLoaded(true)}
							alt={pokemon.name}
						/>
						{pokemon.types.map((type) => (
							<span key={type.slot} className={`pokemon-type ${type.type.name}`}>
								{type.type.name}
							</span>
						))}
						<p className="mt-3 mb-2 text-sm leading-5 text-secondary">
							<b>Abilities: </b>
							{pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
						</p>
					</div>
				</div>
			</div>
			<div className="back">
				<div
					key={pokemon.id}
					className={`${cardColor[0]} rounded-xl bg-opacity-80 px-2 py-2 text-secondary shadow-md transition-all`}
				>
					<div className={`h-[330px] rounded  bg-blue-200 p-3`}>
						<h3 className="mb-2 font-bold capitalize">
							{pokemon.name} <small className="text-xs">#{pokemon.id}</small>
						</h3>
						<img
							loading="lazy"
							className="ml-auto mr-auto"
							width="96"
							height="96"
							src={pokemon.sprites.back_default}
							alt={pokemon.name}
						/>
						<h4 className="-mt-2 border-b-2 border-blue-300 text-left font-bold">Stats</h4>
						<ul className="p-0">
							{pokemon.stats.map((stat) => (
								<li key={stat.stat.name} className="m-1 text-left text-sm font-semibold leading-4 text-secondary">
									{stat.stat.name}: {stat.base_stat}
								</li>
							))}
						</ul>
						<div className="type-icons">{pokemon.types.map((type) => getPokeIcon(type.type.name))}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokeCard;
