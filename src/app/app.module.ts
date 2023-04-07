import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultsDisplayComponent } from './components/results-display/results-display.component';
import { ResultComponent } from './components/result/result.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './components/about/about.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ResultDetailComponent } from './components/result-detail/result-detail.component';

const appRoutes = [
  { path: '', component: ResultsDisplayComponent },
  { path: 'about', component: AboutComponent },
  // { path: '**', component: PageNotFoundComponent },
  {
    path: 'pokemon/:name',
    component: ResultDetailComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResultsDisplayComponent,
    ResultComponent,
    ButtonComponent,
    AboutComponent,
    PageNotFoundComponent,
    ResultDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
