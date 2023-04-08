import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'PokemonListType';
import { PokemonType } from 'Pokemon';

import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute, Route } from '@angular/router';
@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.scss'],
})
export class ResultsDisplayComponent implements OnInit {
  //Think this is redundant? Check!
  pokemon: PokemonType[] = [];
  page: number ;
  totalPokemon: number;
  pokemonSet: any = [];

  constructor(
    private pokemonService: PokemonService,
    private _Activatedroute: ActivatedRoute,

  ) {}

  // Get all pokemon when component is created so full set can be listed in pagination.
  ngOnInit(): void {

   let pageString: string | null = this._Activatedroute.snapshot.paramMap.get('page')
   this.page =  Number(pageString)
   this.getPokemon();
  }

  // Get 50 pokemon through from specific offset, and for each one make an individual API call to get unique details.
  getPokemon() {
    this.pokemonService.getPokemon(this.page * 50).subscribe((pokemon: any) => {
      this.totalPokemon = pokemon.count;

      // Store all unique pokemon details for this batch in an array called pokemonSet
      pokemon.results.forEach((result: any) => {
        this.pokemonService
          .getSpecificPokemon(result.name)
          .subscribe((uniqueResponse: any) => {
            this.pokemonSet.push(uniqueResponse);
          });
      });
    });
  }
}
