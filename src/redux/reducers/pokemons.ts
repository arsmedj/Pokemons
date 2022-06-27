import { IPokemonItem, IType } from "../../types";
import {
  PokemonsActionType,
  PokemonsListAction,
  PokemonsTypesAction,
  PokemonsTypesActionType,
} from "../../types/actionTypes";

interface IinitialState {
  items: IPokemonItem[];
  types: IType[];
  loading: boolean;
  error: string;
}
const initialState: IinitialState = {
  items: [],
  types: [],
  loading: false,
  error: "",
};

export default function pokemonsReducer(
  state = initialState,
  action: PokemonsListAction | PokemonsTypesAction
) {
  switch (action.type) {
    case PokemonsActionType.START_FETCH_POKEMONS:
      return { ...state, loading: true };

    case PokemonsActionType.SUCCESS_FETCH_POKEMONS:
      return { ...state, items: [...action.payload], loading: false };
    case PokemonsActionType.SUCCESS_FETCH_POKEMONS_BY_TYPE: {
      const result = action.payload.map((poke) => {
        return { ...poke.pokemon };
      });
      return { ...state, items: result, loading: false };
    }
    case PokemonsActionType.FAIL_FETCH_POKEMONS:
      return { ...state, error: action.payload, loading: false };
    case PokemonsTypesActionType.SUCCESS_FETCH_POKEMONS_TYPES:
      return { ...state, types: action.payload, loading: false };
    case PokemonsTypesActionType.FAIL_FETCH_POKEMONS_TYPES:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
