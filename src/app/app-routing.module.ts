import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDirectoryComponent } from './pokemon-directory/pokemon-directory.component';

const routes: Routes = [
  {
    path: 'pokemon-directory',
    component: PokemonDirectoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
