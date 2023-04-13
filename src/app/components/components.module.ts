import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';


@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonFormComponent,
    DataTableComponent,
    ScrollToTopComponent
  ],
  exports: [
    PokemonCardComponent,
    PokemonFormComponent,
    DataTableComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }