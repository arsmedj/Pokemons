import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL } from "../../data";
import { IPokemonItem, IPokemonType } from "../../types";
import {
  PokemonsActionType,
  PokemonsListAction,
  PokemonsTypesAction,
  PokemonsTypesActionType,
} from "../../types/actionTypes";
import { AppDispatch } from "../store";

export const requestPokemons = () => (dispatch: AppDispatch) => {
  dispatch(startFetchPokemons());
  axios
    .get(`${BASE_URL}pokemon/?offset=0&limit=10000`)
    .then((response) => {
      dispatch(successFetchPokemons(response.data.results));
    })
    .catch((error: AxiosError) => {
      dispatch(failFetchPokemons(error.message));
    });
};

export const requestPokemonsByType =
  (type: string) => (dispatch: AppDispatch) => {
    dispatch(startFetchPokemons());
    axios
      .get(`${BASE_URL}type/${type}`)
      .then((response: AxiosResponse) => {
        dispatch(successFetchPokemonsByType(response.data.pokemon));
      })
      .catch((error: AxiosError) => {
        dispatch(failFetchPokemonsByType(error.message));
      });
  };

export const requestTypes = () => (dispatch: AppDispatch) => {
  axios
    .get(`${BASE_URL}type`)
    .then((response: AxiosResponse) => {
      dispatch(successFetchPokemonsTypes(response.data.results));
    })
    .catch((error: AxiosError) => {
      dispatch(failFetchPokemonsTypes(error.message));
    });
};

//request list of pokemons
const startFetchPokemons = (): PokemonsListAction => ({
  type: PokemonsActionType.START_FETCH_POKEMONS,
  payload: [],
});
const successFetchPokemons = (items: IPokemonItem[]): PokemonsListAction => ({
  type: PokemonsActionType.SUCCESS_FETCH_POKEMONS,
  payload: items,
});
const failFetchPokemons = (error: string): PokemonsListAction => ({
  type: PokemonsActionType.FAIL_FETCH_POKEMONS,
  payload: error,
});

//request pokemons types
const successFetchPokemonsTypes = (
  types: IPokemonType[]
): PokemonsTypesAction => ({
  type: PokemonsTypesActionType.SUCCESS_FETCH_POKEMONS_TYPES,
  payload: types,
});
const failFetchPokemonsTypes = (error: string): PokemonsTypesAction => ({
  type: PokemonsTypesActionType.FAIL_FETCH_POKEMONS_TYPES,
  payload: error,
});

//request pokemons by type
const successFetchPokemonsByType = (
  data: IPokemonItem[]
): PokemonsListAction => ({
  type: PokemonsActionType.SUCCESS_FETCH_POKEMONS_BY_TYPE,
  payload: data,
});
const failFetchPokemonsByType = (error: string): PokemonsListAction => ({
  type: PokemonsActionType.FAIL_FETCH_POKEMONS_BY_TYPE,
  payload: error,
});
