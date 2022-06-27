import React from "react";
import { IPokemonItem } from "../types";
import PokemonItem from "./PokemonItem";

interface PokemonsListProps {
  items: IPokemonItem[];
  loading: boolean;
  error: string;
}

const PokemonsList: React.FC<PokemonsListProps> = ({
  items,
  loading,
  error,
}) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="pokemons-list">
      {items.map((p: IPokemonItem, idx: number) => (
        <PokemonItem pokemon={p} key={idx} />
      ))}
    </div>
  );
};

export default PokemonsList;
