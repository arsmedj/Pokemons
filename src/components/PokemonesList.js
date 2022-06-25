import React from "react";
import PokemonItem from "./PokemonItem";
const PokemonsList = ({ items, loading, error }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="pokemons-list">
      {items.map((p, idx) => (
        <PokemonItem pokemon={p} key={idx} />
      ))}
    </div>
  );
};

export default PokemonsList;
