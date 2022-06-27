import { IPokemonProfile } from "../../types";
import {
  PokemonProfileAction,
  PokemonProfileActionType,
} from "../../types/actionTypes";

interface IinitialStat {
  profile: IPokemonProfile | null;
  loading: boolean;
  error: string;
}
export const initialState: IinitialStat = {
  profile: null,
  loading: false,
  error: "",
};

export default function pokemonProfileReducer(
  state = initialState,
  action: PokemonProfileAction
) {
  switch (action.type) {
    case PokemonProfileActionType.START_FETCH_POKEMON_PROFILE:
      return { ...state, loading: true };
    case PokemonProfileActionType.SUCCESS_FETCH_POKEMON_PROFILE:
      return { ...state, loading: false, profile: action.payload };
    case PokemonProfileActionType.FAIL_FETCH_POKEMON_PROFILE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
