import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { PokemonType } from 'PokemonType';

interface Location {
  name: string;
  method?: string;
}

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
  location: Location = {name:"", method:""}
  constructor(
    private pokemonService: PokemonService,
    private _Activatedroute: ActivatedRoute
  ) {}

  // Get available sprites with 'default' view
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
    this.pokemonService
      .getSpecificPokemon(this.pokemonName)
      .subscribe((pokemon) => {
        console.log('POKEMON:', pokemon);
        this.getAvailableSprites(pokemon.sprites);
        this.pokemonData = pokemon;

        // Get encounter location
        this.pokemonService
          .getEncounters(pokemon.location_area_encounters)
          .subscribe((result) => {
            if (result.length > 0) {
              this.location.name = result[0].location_area.name;
              console.log('LOC:', result);
              this.pokemonService
                .getEncounterMethod(result[0].location_area.url)
                .subscribe((result) =>this.location.method= result.encounter_method_rates[0].encounter_method.name);
            } else {
              console.log('no encounters');
            }
          });
      });
  }
}
