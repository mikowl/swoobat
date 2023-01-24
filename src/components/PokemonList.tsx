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

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<div>
			<h1 className="mt-2 mb-8 poke-title">Pokedex</h1>
			{isInitialLoading ? (
				<>
					<FontAwesomeIcon className="my-6 text-secondary" icon={faSpinner} size="2xl" pulse />
				</>
			) : (
				<>
					<div className="grid max-w-[1100px] justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 flex-wrap">
						{(data as Pokemon[]).map((pokemon) => (
							<PokeCard key={pokemon.id} pokemon={pokemon} />
						))}
					</div>
					<div className="flex justify-between mt-10 mb-4 pagination">
						<button
							className="btn btn-secondary"
							onClick={() => {
								setPage((old) => Math.max(old - 1, 0));
								setTimeout(scrollToTop, 100);
							}}
							disabled={page === 0}
						>
							Previous
						</button>{" "}
						<div className="flex flex-col items-center -translate-y-4 ">
							<small className="font-semibold text-green-900 uppercase">Page</small>
							<span
								className={`flex items-center justify-center bg-[#f24646] w-12 h-12 border-white border-solid border-2 rounded-full font-bold py-[10px] px-[17px] shadow-sm text-white`}
							>
								{isPreviousData ? <BallSpinner /> : page + 1}
							</span>
						</div>
						<button
							className="relative btn btn-secondary"
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
					{/* <Footer /> */}
				</>
			)}
		</div>
	);
};

export default PokemonList;
