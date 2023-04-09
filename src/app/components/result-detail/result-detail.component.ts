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

  getAvailableSprites(sprites: object){
    let spritesArray = Object.entries(sprites)
    this.defaultSprites = spritesArray.filter(sprite=> sprite[0].includes("default"))   
    }

    // Function to get correct colour from type that can be passed into the conditional styling. Initially I tried using ternary chaining here, but it wasn't working beyond two colours - and It's generally bad practice as I understand (although I'm not convinced this is easier to read)
  getTypeColour(type: string): string {
    switch (type) {
      case 'psychic':
        return '#F85888';
      case 'electric':
        return '#F8D030';
      case 'grass':
        return '#78C850';
      case 'fire':
        return '#F08030';
      case 'water':
        return '#6890F0';
      case 'normal':
        return '#A8A878';
      case 'rock':
        return '#B8A038';
      case 'fighting':
        return '#C03028';
      case 'ice':
        return '#98D8D8';
      case 'bug':
        return '#A8B820';
      case 'flying':
        return '#A890F0';
      case 'dragon':
        return '#7038F8';
      case 'ghost':
        return '#705898';
      case 'poison':
        return '#A040A0';
      case 'dark':
        return '#705848';
      case 'steel':
        return '#B8B8D0';
      case 'ground':
        return '#E0C068';
      case 'fairy':
        return '#ffa8c2';
      default:
        return 'black';
    }
  }
  ngOnInit(): void {
    this.pokemonName = this._Activatedroute.snapshot.paramMap.get('name');
    //PUT IN ERROR HANDLING!
      this.pokemonService
        .getSpecificPokemon(this.pokemonName)
        .subscribe((pokemon) => {
          console.log("POKEMON:", pokemon);
          this.getAvailableSprites(pokemon.sprites);
          this.pokemonData = pokemon
        })
  }
}
