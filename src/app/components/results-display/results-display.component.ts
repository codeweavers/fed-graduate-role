import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'PokemonListType';
import {PokemonType} from 'Pokemon'

import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.scss'],
})
export class ResultsDisplayComponent implements OnInit {

  //Think this is redundant? Check!
  pokemon: PokemonType[] = []
  page = 1;
  totalPokemon: number;
  pokemonSet: any = [];

  constructor(private pokemonService: PokemonService) {}

  // Create the service before importing it here and using to get hte pokemon info
  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this.pokemonService.getPokemon(this.page*50).subscribe((pokemon: any) => {
      this.totalPokemon = pokemon.count;

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
