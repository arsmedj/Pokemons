import React from "react";
import { Link } from "react-router-dom";
import { ucFirst } from "../utils";

const PokemonItem = ({ pokemon: { name } }) => {
  return (
    <Link className="pokemon-item" to={`/${name}`}>
      {ucFirst(name)}
    </Link>
  );
};

export default PokemonItem;
