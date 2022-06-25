import {
  FAIL_FETCH_POKEMON_PROFILE,
  START_FETCH_POKEMON_PROFILE,
  SUCCESS_FETCH_POKEMON_PROFILE,
} from "../actions";

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

export default function pokemonProfileReducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCH_POKEMON_PROFILE:
      return { ...state, loading: true };
    case SUCCESS_FETCH_POKEMON_PROFILE:
      return { ...state, loading: false, profile: action.payload };
    case FAIL_FETCH_POKEMON_PROFILE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
