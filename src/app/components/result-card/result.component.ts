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

  ngOnInit(): void {
    // Create an array of types to use for conditional rendering, and then use getTypeColour to add a colour property to each type in the pokemon data object so it can be used in the detail view as well. 
    this.types = this.pokemon.types.map((type) => type.type.name);
    console.log(this.pokemon.types)
  }
}
