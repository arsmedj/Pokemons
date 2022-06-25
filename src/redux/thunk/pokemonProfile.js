import {
  FAIL_FETCH_POKEMON_PROFILE,
  START_FETCH_POKEMON_PROFILE,
  SUCCESS_FETCH_POKEMON_PROFILE,
} from "../actions";
import axios from "axios";
import { BASE_URL } from "../../data";

export const requestPokemonProfile = (name) => async (dispatch) => {
  dispatch(startFetchPokemonProfile());
  try {
    let response = await axios.get(`${BASE_URL}pokemon/${name}`);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    dispatch(successFetchPokemonProfile(response.data));
  } catch (error) {
    dispatch(failFetchPokemonProfile(error));
  }
};

//request pokemon profile
const startFetchPokemonProfile = () => ({
  type: START_FETCH_POKEMON_PROFILE,
});
const successFetchPokemonProfile = (profile) => ({
  type: SUCCESS_FETCH_POKEMON_PROFILE,
  payload: profile,
});
const failFetchPokemonProfile = (error) => ({
  type: FAIL_FETCH_POKEMON_PROFILE,
  payload: error,
});
