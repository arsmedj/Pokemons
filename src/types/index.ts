export interface IType {
  name: string;
  url: string;
}
export interface IMove {
  name: string;
  url: string;
  move?: {
    name: string;
    url: string;
  };
}
export interface IStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
export interface IVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
}
export interface IPokemonType {
  name: string;
  url: string;
}
export interface IPokemonItem {
  name: string;
  url: string;
  pokemon?: {
    name: string;
    url: string;
  };
}

export interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
export interface IForm {
  name: string;
  url: string;
}
export interface IGameIndice {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}
export interface IPokemonProfile {
  abilities: IAbility[];
  base_experience: number;
  forms: IForm[];
  game_indices: IGameIndice[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: IMove;
    version_group_details: IVersionGroupDetail[];
  };
  name: string;
  order: number;
  species: {
    name: string;
    url: string;
  };

  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      ["official-artwork"]: {
        front_default: string | null;
      };
    };
  };
  stats: IStat[];
  types: {
    slot: number;
    type: IType;
  };
  weight: number;
}
