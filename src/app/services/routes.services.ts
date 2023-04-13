import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  private _menu!: Array<any>;

  constructor() {
  }

  get menu(): any[] {
    this._menu = [
      { title: 'POKEDEX', url: '/pokedex' },
    ];

    return this._menu;
  }
}