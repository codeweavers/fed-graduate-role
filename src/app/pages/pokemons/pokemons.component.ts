import { Component, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  public offset: number;
  public pokemons: Array<any>;

  constructor(private _pokemonService: PokemonService) {
    this.offset = 0;
    this.pokemons = [];
  }

  async ngOnInit(): Promise<void> {
    this.getPokemons();
  }

  private async getPokemons(): Promise<void> {
    try {
      const data = await this._pokemonService.getPokemons(this.offset);

      for (const pokemon of data.results) {
        await this.setPokemon(pokemon['name']);
      }

      if (data.results.length === 0) {
        console.log('fin');
      }
    } catch (err) {
      console.log(<any>err);
    }
  }

  private async setPokemon(name: string): Promise<void> {
    try {
      const pokemon = await this._pokemonService.getPokemon(name);

      const type = pokemon['types'][0]['type']['name'];
      name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
      this.pokemons.push({ id: pokemon.id, name, type });

    } catch (err) {
      console.log(<any>err);
    }
  }

  public async loadMore(): Promise<void> {
    this.offset += 50;
    await this.getPokemons()
  }
}