import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { PokemonType } from 'PokemonType';
@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.scss'],
})
export class ResultDetailComponent implements OnInit {
  pokemonName: any;
  pokemon: Object;
  pokemonData: PokemonType;
  constructor(
    private pokemonService: PokemonService,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pokemonName = this._Activatedroute.snapshot.paramMap.get('name');

    //PUT IN ERROR HANDLING!
    try {
      this.pokemonService
        .getSpecificPokemon(this.pokemonName)
        .subscribe((pokemon) => (this.pokemonData = pokemon));
    } catch (e) {
      console.log('ERROR:', e);
      return;
    }

  }

}
