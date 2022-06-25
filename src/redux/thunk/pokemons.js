import axios from "axios";
import { BASE_URL } from "../../data";
import {
  FAIL_FETCH_POKEMONS,
  START_FETCH_POKEMONS,
  SUCCESS_FETCH_POKEMONS,
  SUCCESS_FETCH_POKEMONS_BY_TYPE,
  SUCCESS_FETCH_POKEMONS_TYPES,
} from "../actions";

export const requestPokemons = () => async (dispatch) => {
  dispatch(startFetchPokemons());
  try {
    let response = await axios.get(`${BASE_URL}pokemon/?offset=0&limit=10000`);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    dispatch(successFetchPokemons(response.data.results));
  } catch (error) {
    dispatch(failFetchPokemons(error.message));
  }
};

export const requestPokemonsByType = (type) => async (dispatch) => {
  dispatch(startFetchPokemons());
  try {
    let response = await axios.get(`${BASE_URL}type/${type}`);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    successFetchPokemonsByType(response.data.pokemon);
  } catch (error) {
    dispatch(failFetchPokemonsByType(error.message));
  }
};

export const requestTypes = () => async (dispatch) => {
  try {
    let response = await axios.get(`${BASE_URL}type`);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    dispatch(successFetchPokemonsTypes(response.data.results));
  } catch (error) {
    dispatch(failFetchPokemonsTypes(error.message));
  }
};

//request list of pokemons
const startFetchPokemons = () => ({
  type: START_FETCH_POKEMONS,
});
const successFetchPokemons = (items) => ({
  type: SUCCESS_FETCH_POKEMONS,
  payload: items,
});
const failFetchPokemons = (error) => ({
  type: FAIL_FETCH_POKEMONS,
  payload: error,
});

//request pokemons types
const successFetchPokemonsTypes = (types) => ({
  type: SUCCESS_FETCH_POKEMONS_TYPES,
  payload: types,
});
const failFetchPokemonsTypes = (error) => ({
  type: SUCCESS_FETCH_POKEMONS_TYPES,
  payload: error,
});

//request pokemons by type
const successFetchPokemonsByType = (data) => ({
  type: SUCCESS_FETCH_POKEMONS_BY_TYPE,
  payload: data,
});
const failFetchPokemonsByType = (error) => ({
  type: SUCCESS_FETCH_POKEMONS_BY_TYPE,
  payload: error,
});
