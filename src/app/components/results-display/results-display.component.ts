import { Component, OnInit } from '@angular/core';
import { PokemonType } from 'PokemonType';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.scss'],
})
export class ResultsDisplayComponent implements OnInit {
  page: number = 1;
  totalPokemon: number;
  pokemonSet: any = [];
  nextNavState: boolean;
  previousNavState: boolean;
  constructor(
    private pokemonService: PokemonService,
    private _Activatedroute: ActivatedRoute
  ) 
  {}

  // Get pokemon on component load (converting string from params into number so it can be used to calculate offset)
  ngOnInit(): void {
    this._Activatedroute.queryParams.subscribe((params) => {
      let pageString: string | null = (this.page = params['page']);
      this.page = Number(pageString);
      this.getPokemon();
    });
  }

  // Get 50 pokemon through from specific offset, and for each one make an individual API call to get unique details.
  getPokemon() {
    this.pokemonService
      .getPokemon((this.page - 1) * 50)
      .subscribe((pokemon: any) => {
        this.totalPokemon = pokemon.count;
        this.pokemonSet = [];
        this.getPokemonSetDetails(pokemon.results);
      });
  }

  // Get specifc searched pokemon result and set it to display
  getSearchedPokemon(searchTerm: string) {
    let res: any = [];
    this.pokemonService.getSpecificPokemon(searchTerm).subscribe(
      (response) => {
        res.push(response);
        if (res.length > 0) {
          this.pokemonSet = [];
          this.pokemonSet.push(...res);
        }
      },
      (error) => {
        if (error.status) {
          window.alert(
            `${searchTerm} ${error.error} in the Poképedia - try checking your spelling?`
          );
        }
      }
    );
  }

  //Uses data (names and URLs) from inital batch call to populate pokemon array with individual data for each pokemon
  getPokemonSetDetails(pokemon: PokemonType[]) {
    pokemon.forEach((result: any) => {
      this.pokemonService
        .getSpecificPokemon(result.name)
        .subscribe((uniqueResponse: any) => {
          this.pokemonSet.push(uniqueResponse);
        });
    });
    this.previousNavState = this.page > 1;
    this.nextNavState = this.page < 26;
  }
}
