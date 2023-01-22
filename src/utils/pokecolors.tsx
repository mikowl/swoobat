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

export default getCardColor;
