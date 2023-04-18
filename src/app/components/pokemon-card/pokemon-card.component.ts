import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: any;

  public colors: any;
  public color: string;

  constructor() {
    this.pokemon = {};

    this.colors = this.typeColors();
    this.color = '#EEE';
  }

  ngOnInit(): void {
    const tipo: string = <string>this.pokemon['type'];

    this.color = this.colors[tipo] !== undefined
      ? <string>this.colors[tipo]
      : '#EEE';
  }

  private typeColors(): Object {
    return {
      fire: '#FDDFDF',
      grass: '#DEFDE0',
      electric: '#FCF7DE',
      water: '#DEF3FD',
      ground: '#F4E7DA',
      rock: '#D5D5D4',
      fairy: '#FCEAFF',
      poison: '#98D7A5',
      bug: '#F8D5A3',
      dragon: '#97B3E6',
      psychic: '#EAEDA1',
      flying: '#F5F5F5',
      fighting: '#E6E0D4',
      normal: '#F5F5F5'
    };
  }
}