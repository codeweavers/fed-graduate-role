import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styles: []
})
export class PokemonFormComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = 'ADD';
  }

  ngOnInit(): void { }

}