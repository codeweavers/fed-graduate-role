import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit{
  constructor( private pokemonService : PokemonService){}
pagesArray:number[]
@Input() totalPokemon: number 

  // takes the total amount and creates array of page integers
ngOnInit():void{
this.getPagesArray();

}

getPagesArray(): void{
  this.pokemonService.getPokemon(0).subscribe((response)=>{
    const totalPages = response.count/50;
    const pagesArray = Array.from({ length: totalPages }, (value, index) => index);
console.log("ARR:", pagesArray);
this.pagesArray = pagesArray}
  )

}

}
