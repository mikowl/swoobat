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
			return <FontAwesomeIcon icon={faLeaf} className="text-green-300" />;
		case "fire":
			return <FontAwesomeIcon icon={faFire} className="text-orange-200" />;
		case "water":
			return <FontAwesomeIcon icon={faTint} className="text-blue-200" />;
		case "bug":
			return <FontAwesomeIcon icon={faBug} className="text-lime-200" />;
		case "normal":
			return <FontAwesomeIcon icon={faPaw} className="text-blue-200" />;
		case "poison":
			return <FontAwesomeIcon icon={faSkullCrossbones} className="text-purple-200" />;
		case "electric":
			return <FontAwesomeIcon icon={faBolt} className="text-yellow-200" />;
		case "ground":
			return <FontAwesomeIcon icon={faMountain} className="text-[#cebb8db3]" />;
		case "fairy":
			return <FontAwesomeIcon icon={faMagicWandSparkles} className="text-pink-200" />;
		case "fighting":
			return <FontAwesomeIcon icon={faFistRaised} className="text-red-200" />;
		case "psychic":
			return <FontAwesomeIcon icon={faEye} className="text-pink-200" />;
		case "rock":
			return <FontAwesomeIcon icon={faGem} className="text-yellow-200" />;
		case "ghost":
			return <FontAwesomeIcon icon={faGhost} className="text-gray-100" />;
		case "ice":
			return <FontAwesomeIcon icon={faSnowflake} className="text-white" />;
		case "dragon":
			return <FontAwesomeIcon icon={faDragon} className="text-emerald-200" />;
		case "flying":
			return <FontAwesomeIcon icon={faWind} className="text-sky-200" />;
		case "dark":
			return <FontAwesomeIcon icon={faMoon} className="text-gray-200" />;
		case "steel":
			return <FontAwesomeIcon icon={faShieldAlt} className="text-gray-200" />;
		default:
			return <FontAwesomeIcon icon={faCircle} className="text-gray-200" />;
	}
};

export default getPokeIcon;
