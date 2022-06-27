import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import pokemonProfileReducer from "./reducers/pokemonProfile";
import pokemonsReducer from "./reducers/pokemons";
const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemonProfile: pokemonProfileReducer,
});

const setupStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
