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
getTypeColour(type: string): string{
return type == "psychic" ? "purple"
: "grass" ? "green"
: "water" ? "blue"
: "electric"? "yellow"
: "fire" ? "red"
: "bug" ? "olive"
: "normal"? "grey"
: "psychic"?"pink"
: "ghost"? "purple"
: "black"
}
  constructor() {}
  ngOnInit(): void {
    this.types = this.pokemon.types.map((type) => type.type.name);
    console.log('TYPES:', this.types);
  }
}
