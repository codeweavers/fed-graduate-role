import { Component, OnInit, Input } from '@angular/core';
import { PokemonType } from 'PokemonType';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() pokemon: PokemonType;
  types: any;
  displayImage: string;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    // Create an array of objects to use for conditional rendering, with each object containng the type name and the colour code associated with it
    this.types = this.pokemon.types.map((type) => {
      return {
        name: type.type.name,
        colour: this.pokemonService.getTypeColour(type.type.name),
      };
    });
    this.displayImage =
      this.pokemon.sprites.front_default !== null
        ? this.pokemon.sprites.front_default
        : Object.entries(this.pokemon.sprites).filter(
            (sprite) => typeof sprite[1] === 'string'
          ).length > 0
        ? Object.entries(this.pokemon.sprites).filter(
            (sprite) => typeof sprite[1] === 'string'
          )[0][1]
        : '../../assets/no-image.png';
  }
}
