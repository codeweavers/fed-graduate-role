import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { PokemonType } from 'PokemonType';
import { Router } from '@angular/router';

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
  pokemonData: PokemonType;
  defaultSprites: {
    available: boolean;
    front_default?: string;
    back_default?: string;
  };
  location: Location = { name: '', method: '' };
  constructor(
    private pokemonService: PokemonService,
    private _Activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  // Check if default sprite URLs are available, and if so assign them to sprites object. If not, set a 'no image found' icon to show instead. 
  getAvailableSprites(sprites: any) {
    if (sprites.front_default && sprites.back_default) {
      this.defaultSprites = {
        available: true,
        front_default: sprites.front_default,
        back_default: sprites.back_default,
      };
    } else {
      this.defaultSprites = {
        available: false,
      };
    }
  }

  // Get colour to render on card based on the pokemon's first (or only) type.
  getCardColour(pokemon: PokemonType): string {
    return this.pokemonService.getTypeColour(pokemon.types[0].type.name);
  }

  // On init, pull the pokemon's name from the URL parameters and use it to call the specific data from the api. 
  ngOnInit(): void {
    this.pokemonName = this._Activatedroute.snapshot.paramMap.get('name');
    this.pokemonService
      .getSpecificPokemon(this.pokemonName)
      .subscribe((pokemon) => {
        console.log('POKEMON:', pokemon);
        this.getAvailableSprites(pokemon.sprites);
        this.pokemonData = pokemon;

        // Use this specific data to make an additional call to the API that returns one location in which it might be encountered.
        this.pokemonService
          .getEncounters(pokemon.location_area_encounters)
          .subscribe((result) => {
            if (result.length > 0) {
              this.location.name = result[0].location_area.name;
              console.log('LOC:', result);

              // Use dat returned from this call to make another call, this time returning a method by which one mght ecounter that pokemon.
              this.pokemonService
                .getEncounterMethod(result[0].location_area.url)
                .subscribe(
                  (result) =>
                    (this.location.method =
                      result.encounter_method_rates[0].encounter_method.name)
                );
            } else {
              console.log('no encounters');
            }
          });
      },(error)=>{
        this.router.navigate(['/404'])
      });
  }
}
