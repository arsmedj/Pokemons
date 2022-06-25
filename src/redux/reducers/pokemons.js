import {
  FAIL_FETCH_POKEMONS,
  FAIL_FETCH_POKEMONS_TYPES,
  START_FETCH_POKEMONS,
  SUCCESS_FETCH_POKEMONS,
  SUCCESS_FETCH_POKEMONS_BY_TYPE,
  SUCCESS_FETCH_POKEMONS_TYPES,
} from "../actions";

const initialState = {
  items: [],
  types: [],
  currentType: null,
  loading: false,
  error: null,
};

export default function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCH_POKEMONS:
      return { ...state, loading: true };

    case SUCCESS_FETCH_POKEMONS:
      return { ...state, items: [...action.payload], loading: false };
    case SUCCESS_FETCH_POKEMONS_BY_TYPE: {
      const result = action.payload.map((poke) => {
        return { ...poke.pokemon };
      });
      return { ...state, items: [...result], loading: false };
    }
    case SUCCESS_FETCH_POKEMONS_TYPES:
      return { ...state, types: action.payload };
    case FAIL_FETCH_POKEMONS:
      return { ...state, error: action.payload, loading: false };
    case FAIL_FETCH_POKEMONS_TYPES:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
