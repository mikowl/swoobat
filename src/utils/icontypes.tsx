import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBolt,
	faWater,
	faTint,
	faFire,
	faBug,
	faMoon,
	faDragon,
	faMagicWandSparkles,
	faFistRaised,
	faWind,
	faGhost,
	faLeaf,
	faMountain,
	faSnowflake,
	faCircle,
	faSkullCrossbones,
	faEye,
	faGem,
	faShieldAlt,
	faPaw,
} from "@fortawesome/free-solid-svg-icons";

const getPokeIcon = (type: string) => {
	switch (type) {
		case "grass":
			return <FontAwesomeIcon key={type} icon={faLeaf} className="text-green-300" />;
		case "fire":
			return <FontAwesomeIcon key={type} icon={faFire} className="text-orange-200" />;
		case "water":
			return <FontAwesomeIcon key={type} icon={faTint} className="text-blue-200" />;
		case "bug":
			return <FontAwesomeIcon key={type} icon={faBug} className="text-lime-200" />;
		case "normal":
			return <FontAwesomeIcon key={type} icon={faPaw} className="text-blue-200" />;
		case "poison":
			return <FontAwesomeIcon key={type} icon={faSkullCrossbones} className="text-purple-200" />;
		case "electric":
			return <FontAwesomeIcon key={type} icon={faBolt} className="text-yellow-200" />;
		case "ground":
			return <FontAwesomeIcon key={type} icon={faMountain} className="text-[#cebb8db3]" />;
		case "fairy":
			return <FontAwesomeIcon key={type} icon={faMagicWandSparkles} className="text-pink-200" />;
		case "fighting":
			return <FontAwesomeIcon key={type} icon={faFistRaised} className="text-red-200" />;
		case "psychic":
			return <FontAwesomeIcon key={type} icon={faEye} className="text-pink-200" />;
		case "rock":
			return <FontAwesomeIcon key={type} icon={faGem} className="text-yellow-200" />;
		case "ghost":
			return <FontAwesomeIcon key={type} icon={faGhost} className="text-gray-100" />;
		case "ice":
			return <FontAwesomeIcon key={type} icon={faSnowflake} className="text-white" />;
		case "dragon":
			return <FontAwesomeIcon key={type} icon={faDragon} className="text-emerald-200" />;
		case "flying":
			return <FontAwesomeIcon key={type} icon={faWind} className="text-sky-200" />;
		case "dark":
			return <FontAwesomeIcon key={type} icon={faMoon} className="text-gray-200" />;
		case "steel":
			return <FontAwesomeIcon key={type} icon={faShieldAlt} className="text-gray-200" />;
		default:
			return <FontAwesomeIcon key={type} icon={faCircle} className="text-gray-200" />;
	}
};

export default getPokeIcon;
