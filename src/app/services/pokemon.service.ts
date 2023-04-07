import { Injectable } from '@angular/core';
import { PokemonList } from 'PokemonListType';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50';
  // IS THIS CORRECT ABOVE WITH THE TYPE??

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<PokemonList> {
    return this.http.get<PokemonList>(this.apiUrl);
  }

  getSpecificPokemon(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
