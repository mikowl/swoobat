import React from "react";
import { Pokemon } from "../types/pokemon";

const PokeCard = ({ pokemon }: { pokemon: Pokemon }) => {
	// handle card flip
	const handleCardFlip = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const card = e.currentTarget;
		card.classList.toggle("active");
	};

	const pTypes = pokemon.types.map((type) => type.type.name);
	// generate card color based on types
	const cardColor = pTypes.map((type) => {
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
	});
	console.log("cardColor", cardColor);

	return (
		<div className="flip" onClick={handleCardFlip}>
			<div className="front">
				<div
					className={`${cardColor[0]} bg-shadow-md bg-bg-text-secondary bg-opacity-80 px-2 py-2 rounded-xl transition-all hover:rotate-3 hover:-translate-y-1`}
				>
					<div className={`h-[330px] ${cardColor[1]} p-3 relative rounded bg-opacity-80`}>
						<small className="poke-id">#{pokemon.id}</small>
						<h3 className="font-bold capitalize poke-name">{pokemon.name} </h3>
						{/* <p className="mt-2 text-sm font-medium base-exp exp">
							Base exp: {pokemon.base_experience}
						</p> */}
						<img
							loading="eager"
							className="mb-3 ml-auto mr-auto"
							width="175"
							height="175"
							src={pokemon.sprites.other?.["official-artwork"].front_default}
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
					className={`${cardColor[0]} shadow-md text-secondary bg-opacity-80 px-2 py-2 rounded-xl transition-all`}
				>
					<div className={`bg-blue-200 h-[330px]  p-3 rounded`}>
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
						<h4 className="-mt-2 font-bold text-left border-b-2 border-blue-300">
							Stats
						</h4>
						<ul className="p-0">
							{pokemon.stats.map((stat) => (
								<li
									key={stat.stat.name}
									className="m-1 text-sm font-semibold leading-4 text-left text-secondary"
								>
									{stat.stat.name}: {stat.base_stat}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokeCard;
