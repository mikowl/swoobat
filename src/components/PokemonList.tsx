import React, { useState } from "react";
import { Pokemon } from "../types/pokemon";
import PokeCard from "./PokeCard";
import { usePokemon } from "../utils/pokehooks";
import BallSpinner from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const PokemonList: React.FC = () => {
	const [page, setPage] = useState(0);
	const { data, isInitialLoading, error, isPreviousData } = usePokemon(page);

	const scrollToTop = (): void => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<div>
			<h1 className="poke-title mt-2 mb-8">Pokedex</h1>
			{isInitialLoading ? (
				<>
					<FontAwesomeIcon className="my-6 text-secondary" icon={faSpinner} size="2xl" pulse />
				</>
			) : (
				<>
					<div className="grid max-w-[1100px] grid-cols-1 flex-wrap justify-center gap-5 md:grid-cols-2 lg:grid-cols-4">
						{(data as Pokemon[]).map((pokemon) => (
							<PokeCard key={pokemon.id} pokemon={pokemon} />
						))}
					</div>
					<div className="pagination mt-10 mb-4 flex justify-between">
						<button
							className="btn-secondary btn"
							onClick={() => {
								setPage((old) => Math.max(old - 1, 0));
								setTimeout(scrollToTop, 100);
							}}
							disabled={page === 0}
						>
							Previous
						</button>{" "}
						<div className="flex -translate-y-4 flex-col items-center ">
							<small className="font-semibold uppercase text-green-900">Page</small>
							<span
								className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-solid border-white bg-[#f24646] py-[10px] px-[17px] font-bold text-white shadow-sm`}
							>
								{isPreviousData ? <BallSpinner /> : page + 1}
							</span>
						</div>
						<button
							className="btn-secondary btn relative"
							onClick={() => {
								if (!isPreviousData && data) {
									setPage((old) => old + 1);
									// Not sure why this needs to be in a timeout but the smooth scroll doesn't work without it
									setTimeout(scrollToTop, 500);
								}
							}}
							disabled={isPreviousData}
						>
							Next
						</button>
					</div>
					<Footer />
				</>
			)}
		</div>
	);
};

export default PokemonList;
