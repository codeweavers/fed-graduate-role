import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'PokemonListType';
import { PokemonType } from 'Pokemon';

import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.scss'],
})
export class ResultsDisplayComponent implements OnInit {
  //Think this is redundant? Check!
  pokemon: PokemonType[] = [];
  page = 1;
  totalPokemon: number;
  pokemonSet: any = [];

  constructor(private pokemonService: PokemonService) {}

  // Get all pokemon when component is created so full set can be listed in pagination.
  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getPokemon(this.page * 50).subscribe((pokemon: any) => {
      this.totalPokemon = pokemon.count;

      // Store all pokemon results in pokemonSet
      pokemon.results.forEach((result: any) => {
        this.pokemonService
          .getSpecificPokemon(result.name)
          .subscribe((uniqueResponse: any) => {
            this.pokemonSet.push(uniqueResponse);
          });
      });
    });
    console.log('🚨🚨🚨FULLSET', this.pokemonSet);
  }
}
