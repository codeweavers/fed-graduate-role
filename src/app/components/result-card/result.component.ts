import { Component, OnInit, Input } from '@angular/core';
import { PokemonType } from 'PokemonType';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() pokemon: PokemonType;
  types: any;

  constructor() {}
  // Function to get correct colour from type that can be passed into the conditional styling. Initially I tried using ternary chaining here, but it wasn't working beyond two colours - and It's generally bad practice as I understand (although I'm not convinced this is easier to read)
  getTypeColour(type: string): string {
    console.log('🚨GET COLOUR FIRED');
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
    // Create an array of types to use for conditional rendering, and then use getTypeColour to add a colour property to each type in the pokemon data object so it can be used in the detail view as well.

    // this.types = this.pokemon.types.map((type) => [type.type.name, this.getTypeColour(type.type.name,) ]);

    this.types = this.pokemon.types.map((type) => {
      let res: any = {};
      res.name = type.type.name;
      res.colour = this.getTypeColour(type.type.name);
      return res;
    });
  }
}
