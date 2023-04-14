import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  pagesArray: number[];
  @Input() totalPokemon: number;
  ngOnInit(): void {
    this.getPagesArray();
  }

  // Uses total number of pokemon to dynamically create an array of consecutive numbers to serve as the navigation buttons
  getPagesArray(): void {
    this.pokemonService.getPokemon(0).subscribe((response:any) => {
      const totalPages = response.count / 50;
      const pagesArray = Array.from(
        { length: totalPages  +1 },
        (value, index) => index +1
      );
      this.pagesArray = pagesArray;
    });
  }

}
