import { Component, OnInit, Input,} from '@angular/core';
import { PokemonType } from 'Pokemon';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
@Input() pokemon: PokemonType;

  constructor(){};
  ngOnInit():void{
    // console.log("POKEMON ON RESULT:", this.pokemon)
  };

}
