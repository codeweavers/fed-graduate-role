export interface PokemonType {
  abilities: [];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [item:{name: string, url: string}, version_details:[] ];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: '';
  order: number;
  past_types: [];
  species: {name: string};
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  stats: [];
  types: [{slot: number, type: {name: string, url: string, colour?: string}}];
  weight: number;
}
