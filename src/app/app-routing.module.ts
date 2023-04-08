import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsDisplayComponent } from './components/results-display/results-display.component';
import { AboutComponent } from './components/about/about.component';
import { ResultDetailComponent } from './components/result-detail/result-detail.component';

const routes: Routes = [
  { path: 'pokemon', component: ResultsDisplayComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'pokemon/:name',
    component: ResultDetailComponent,
  },
];


// HERE above add router link that does same thing, so main page can load except with diff parameter used as offset

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
