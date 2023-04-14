import { Injectable } from '@angular/core';
import { PokemonList } from 'PokemonListType';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonType } from 'PokemonType';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

// TIDY ALL THIS BIT UP
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50';

  constructor(private http: HttpClient) {}

  // Get batch of 50 pokemon from specific offset
  getPokemon(offset: number): Observable<PokemonList>{
    return this.http.get<PokemonList>(`${this.apiUrl}&offset=${offset}`)
  }

  //Get data for a specific pokemon
  getSpecificPokemon(name: string): Observable<PokemonType> {
    return this.http.get<PokemonType>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  }

  // Function to get correct colour from type that can be passed into the conditional styling. Initially I tried using ternary chaining here, but it wasn't working beyond two colours - and It's generally bad practice as I understand (although I'm not convinced this is easier to read). I'm not convinced either that here is the best place for it, but I want it accessible from multiple components. 
  getTypeColour(type: string): string {
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

  // Get encounters
  getEncounters(url: string): Observable<any>{
    let encountersObj= this.http.get(url);
    return encountersObj;
  }

  // Get method of encounter
  getEncounterMethod(url: string): Observable<any>{
    return this.http.get(url);
  }

  getAbilityInformation(ability:string): Observable<any>{
    console.log("ABILITY COME THROUGH", ability)
return this.http.get(ability)
}
}
