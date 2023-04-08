import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsDisplayComponent } from './components/results-display/results-display.component';
import { AboutComponent } from './components/about/about.component';
import { ResultDetailComponent } from './components/result-detail/result-detail.component';

const routes: Routes = [
  { path: '', component: ResultsDisplayComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'pokemon/:name',
    component: ResultDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
