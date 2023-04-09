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
  defaultSprites: any;

  constructor(
    private pokemonService: PokemonService,
    private _Activatedroute: ActivatedRoute
  ) {}

  getAvailableSprites(sprites: object) {
    let spritesArray = Object.entries(sprites);
    this.defaultSprites = spritesArray.filter((sprite) =>
      sprite[0].includes('default')
    );
  }

  getCardColour(pokemon: PokemonType): string {
    return this.pokemonService.getTypeColour(pokemon.types[0].type.name);
  }
  ngOnInit(): void {
    this.pokemonName = this._Activatedroute.snapshot.paramMap.get('name');
    //PUT IN ERROR HANDLING!
    this.pokemonService
      .getSpecificPokemon(this.pokemonName)
      .subscribe((pokemon) => {
        console.log('POKEMON:', pokemon);
        this.getAvailableSprites(pokemon.sprites);
        this.pokemonData = pokemon;
      });
  }
}
