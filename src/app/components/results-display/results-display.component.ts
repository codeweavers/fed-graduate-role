import { Component, OnInit } from '@angular/core';
import { PokemonType } from 'Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.scss'],
})
export class ResultsDisplayComponent implements OnInit {
  // pokemon: PokemonType[] = [];
  page: number = 1;
  totalPokemon: number;
  pokemonSet: any = [];

  constructor(
    private pokemonService: PokemonService,
    private _Activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  // Get all pokemon when component is created .
  ngOnInit(): void {
    this._Activatedroute.queryParams.subscribe((params) => {
      let pageString: string | null = (this.page = params['page']);
      this.page = Number(pageString);
      this.getPokemon();
    });
    // console.log('currently on page:', this.page);

  }

  // Get 50 pokemon through from specific offset, and for each one make an individual API call to get unique details.
  getPokemon() {
    this.pokemonService.getPokemon(this.page * 50).
    
    subscribe((pokemon: any) => {
      this.totalPokemon = pokemon.count;
this.pokemonSet=[] 

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
