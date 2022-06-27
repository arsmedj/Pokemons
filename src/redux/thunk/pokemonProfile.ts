import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL } from "../../data";
import { AppDispatch } from "../store";
import { IPokemonProfile } from "../../types";
import {
  PokemonProfileAction,
  PokemonProfileActionType,
} from "../../types/actionTypes";

export const requestPokemonProfile =
  (name: string) => (dispatch: AppDispatch) => {
    dispatch(startFetchPokemonProfile());
    axios
      .get(`${BASE_URL}pokemon/${name}`)
      .then((response: AxiosResponse) => {
        dispatch(successFetchPokemonProfile(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(failFetchPokemonProfile(error.message));
      });
  };

//request pokemon profile
const startFetchPokemonProfile = (): PokemonProfileAction => ({
  type: PokemonProfileActionType.START_FETCH_POKEMON_PROFILE,
  payload: [],
});
const successFetchPokemonProfile = (
  profile: IPokemonProfile
): PokemonProfileAction => ({
  type: PokemonProfileActionType.SUCCESS_FETCH_POKEMON_PROFILE,
  payload: profile,
});
const failFetchPokemonProfile = (error: string): PokemonProfileAction => ({
  type: PokemonProfileActionType.FAIL_FETCH_POKEMON_PROFILE,
  payload: error,
});
