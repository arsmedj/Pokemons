import { IPokemonItem, IPokemonProfile, IType } from ".";

//POKEMONS LIST

export interface IStartFetchPokemons {
  type: typeof PokemonsActionType.START_FETCH_POKEMONS;
  payload: [];
}
export interface ISuccessFetchPokemons {
  type: typeof PokemonsActionType.SUCCESS_FETCH_POKEMONS;
  payload: IPokemonItem[];
}
export interface IFailFetchPokemons {
  type: typeof PokemonsActionType.FAIL_FETCH_POKEMONS;
  payload: string;
}
export interface ISuccessFetchPokemonsByType {
  type: typeof PokemonsActionType.SUCCESS_FETCH_POKEMONS_BY_TYPE;
  payload: IPokemonItem[];
}
export interface IFailFetchPokemonsByType {
  type: typeof PokemonsActionType.FAIL_FETCH_POKEMONS_BY_TYPE;
  payload: string;
}
export enum PokemonsActionType {
  START_FETCH_POKEMONS = "START_FETCH_POKEMONS",
  SUCCESS_FETCH_POKEMONS = "SUCCESS_FETCH_POKEMONS",
  FAIL_FETCH_POKEMONS = "FAIL_FETCH_POKEMONS",
  SUCCESS_FETCH_POKEMONS_BY_TYPE = "SUCCESS_FETCH_POKEMONS_BY_TYPE",
  FAIL_FETCH_POKEMONS_BY_TYPE = "FAIL_FETCH_POKEMONS_BY_TYPE",
}

export type PokemonsListAction =
  | IStartFetchPokemons
  | ISuccessFetchPokemons
  | IFailFetchPokemons
  | IFailFetchPokemonsByType
  | ISuccessFetchPokemonsByType;

//POKEMONS TYPES

export interface ISuccessFetchPokemonsTypes {
  type: typeof PokemonsTypesActionType.SUCCESS_FETCH_POKEMONS_TYPES;
  payload: IType[];
}
export interface IFailFetchPokemonsTypes {
  type: typeof PokemonsTypesActionType.FAIL_FETCH_POKEMONS_TYPES;
  payload: string;
}

export enum PokemonsTypesActionType {
  SUCCESS_FETCH_POKEMONS_TYPES = "SUCCESS_FETCH_POKEMONS_TYPES",
  FAIL_FETCH_POKEMONS_TYPES = "FAIL_FETCH_POKEMONS_TYPES",
}
export type PokemonsTypesAction =
  | ISuccessFetchPokemonsTypes
  | IFailFetchPokemonsTypes;

//POKEMON PROFILE

export interface IstartFetchPokemonProfile {
  type: typeof PokemonProfileActionType.START_FETCH_POKEMON_PROFILE;
  payload: [];
}
export interface IsuccessFetchPokemonProfile {
  type: typeof PokemonProfileActionType.SUCCESS_FETCH_POKEMON_PROFILE;
  payload: IPokemonProfile;
}
export interface IfailFetchPokemonProfile {
  type: typeof PokemonProfileActionType.FAIL_FETCH_POKEMON_PROFILE;
  payload: string;
}

export enum PokemonProfileActionType {
  START_FETCH_POKEMON_PROFILE = "START_FETCH_POKEMON_PROFILE",
  SUCCESS_FETCH_POKEMON_PROFILE = "SUCCESS_FETCH_POKEMON_PROFILE",
  FAIL_FETCH_POKEMON_PROFILE = "FAIL_FETCH_POKEMON_PROFILE",
}

export type PokemonProfileAction =
  | IstartFetchPokemonProfile
  | IsuccessFetchPokemonProfile
  | IfailFetchPokemonProfile;
