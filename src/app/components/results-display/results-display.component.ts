import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'PokemonType';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.scss'],
})
export class ResultsDisplayComponent implements OnInit {
  pokemon: Pokemon = {
    count: 0,
    next: '',
    previous: '',
    results: [{ name: '', url: '' }],
  };

  pokemonSet: any = [];

  constructor(private pokemonService: PokemonService) {}

  // Create the service before importing it here and using to get hte pokemon info
  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((pokemon: any) => {
      pokemon.results.forEach((result: any) => {
        this.pokemonService
          .getSpecificPokemon(result.name)
          .subscribe((uniqueResponse: any) => {
         
            this.pokemonSet.push(uniqueResponse);
          });
          
      });
    });
    console.log("FULLSET", this.pokemonSet)
  }
}
