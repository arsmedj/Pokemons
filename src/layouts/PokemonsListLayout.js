import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import PokemonsList from "../components/PokemonesList";
import Filter from "../components/Filter";
import usePagination from "../hooks/usePagination";
import {
  requestPokemons,
  requestPokemonsByType,
  requestTypes,
} from "../redux/thunk/pokemons";
import { CONTENT_PER_PAGE } from "../data";
import ReactPaginate from "react-paginate";

const PokemonsListLayout = () => {
  const { items, types, loading, error } = useSelector(
    (state) => state.pokemons
  );
  const [filter, setFilter] = useState("");

  const {
    totalPages,
    items: list,
    handlePageClick,
  } = usePagination({
    contentPerPage: CONTENT_PER_PAGE,
    filter,
    items,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPokemons(""));
    dispatch(requestTypes());
  }, []);

  const handleChangeFilterName = ({ target: { value } }) => {
    setFilter(value);
    handlePageClick({ selected: 1 });
  };

  const handleChangeFilterType = ({ target: { value } }) => {
    if (!value.includes("Choose type")) {
      dispatch(requestPokemonsByType(value));
    } else {
      dispatch(requestPokemons());
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
        renderOnZeroPageCount={null}
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

export default PokemonsListLayout;
