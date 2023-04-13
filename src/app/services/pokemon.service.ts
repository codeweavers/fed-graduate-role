import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = 'https://pokeapi.co/api/v2/';
  }

  public async getPokemons(offset: number): Promise<any> {
    const limit = 50;

    return await this._httpClient
      .get(`${this.url}pokemon?limit=${limit}&offset=${offset}`)
      .toPromise();
  }

  public async getPokemon(name: string): Promise<any> {
    return await this._httpClient
      .get(`${this.url}pokemon/${name}`)
      .toPromise();
  }
}