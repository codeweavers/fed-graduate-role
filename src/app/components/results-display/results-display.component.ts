import { Component, OnInit } from '@angular/core';
import { PokemonType } from 'PokemonType';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.scss'],
})
export class ResultsDisplayComponent implements OnInit {
  // pokemon: PokemonType[] = [];
  page: number = 0;
  totalPokemon: number;
  pokemonSet: any = [];

  constructor(
    private pokemonService: PokemonService,
    private _Activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  // Get pokemon on component load (converting string from params into number so it can be used to calculate offset)
  ngOnInit(): void {
    this._Activatedroute.queryParams.subscribe((params) => {
      let pageString: string | null = (this.page = params['page']);
      this.page = Number(pageString);
      this.getPokemon();
    },  (error) => {                              //Error callback
      console.error('error caught in component', error)});
  }

  // Get 50 pokemon through from specific offset, and for each one make an individual API call to get unique details.
  getPokemon() {
    this.pokemonService
      .getPokemon((this.page - 1) * 50)
      .subscribe((pokemon: any) => {
        this.totalPokemon = pokemon.count;
        this.pokemonSet = [];

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
  getSearchedPokemon(searchTerm: string) {
    // this.pokemonSet.push(this.pokemonService.getSpecificPokemon(searchTerm));

    let res: any = [];
    this.pokemonService.getSpecificPokemon(searchTerm).subscribe((response) => {
      res.push(response);
      if (this.checkResult(res)) {
        this.pokemonSet = [];
        this.pokemonSet.push(...res);
      }
    });
  }
  checkResult(result: any) {
    console.log('check fired');

    return result.length > 0 ? true : false;
  }
}
