import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { PokemonsComponent } from './pokemons/pokemons.component';


@NgModule({
  declarations: [
    PagesComponent,
    PokemonsComponent
  ],
  exports: [
    PagesComponent,
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }