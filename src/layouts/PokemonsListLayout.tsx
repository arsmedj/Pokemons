import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

import PokemonsList from "../components/PokemonesList";

import usePagination from "../hooks/usePagination";
import {
  requestPokemons,
  requestPokemonsByType,
  requestTypes,
} from "../redux/thunk/pokemons";
import { CONTENT_PER_PAGE } from "../data";
import ReactPaginate from "react-paginate";
import Filter from "../components/Filter";
import { RootState } from "../redux/store";
import { IPokemonItem } from "../types";

interface PokemonsListLayoutProps {
  requestPokemons: () => void;
  requestTypes: () => void;
  requestPokemonsByType: (type: string) => void;
}

const PokemonsListLayout: React.FC<PokemonsListLayoutProps> = ({
  requestPokemons,
  requestTypes,
  requestPokemonsByType,
}) => {
  const { items, types, loading, error } = useTypedSelector(
    (state) => state.pokemons
  );
  const [filter, setFilter] = useState("");

  const {
    totalPages,
    items: list,
    handlePageClick,
  } = usePagination<IPokemonItem>(CONTENT_PER_PAGE, items, filter);

  useEffect(() => {
    requestPokemons();
    requestTypes();
  }, [requestPokemons, requestTypes]);

  const handleChangeFilterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    handlePageClick({ selected: 1 });
  };

  const handleChangeFilterType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let { value } = e.target;
    if (!value.includes("Choose type")) {
      requestPokemonsByType(value);
    } else {
      requestPokemons();
    }
  };

  return (
    <>
      <Filter
        pokeName={filter}
        types={types}
        onChangeFilterName={handleChangeFilterName}
        onChangeFilterType={handleChangeFilterType}
      />
      <PokemonsList items={list} loading={loading} error={error} />
      <ReactPaginate
        breakLabel="..."
        previousLabel="&larr;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        nextLabel="&rarr;"
        disabledClassName="disabled"
        activeClassName="active"
        className="pagination"
        pageClassName="page"
        nextClassName="page"
        previousClassName="page"
        breakClassName="page"
        pageLinkClassName="active-link"
      />
    </>
  );
};
const mapStateToProps = (state: RootState) => ({});
export default connect(mapStateToProps, {
  requestPokemons,
  requestPokemonsByType,
  requestTypes,
})(PokemonsListLayout);
