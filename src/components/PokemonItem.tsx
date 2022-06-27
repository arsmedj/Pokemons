import React from "react";
import { Link } from "react-router-dom";
import { IPokemonItem } from "../types";
import { ucFirst } from "../utils";
interface PokemonItemProps {
  pokemon: IPokemonItem;
}
const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon: { name } }) => {
  return (
    <Link className="pokemon-item" to={`/${name}`}>
      {ucFirst(name)}
    </Link>
  );
};

export default PokemonItem;
