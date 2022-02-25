import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home.page';
import { CarrelloPage } from './pages/carrello.page';
import { NavbarComponent } from './navbar.component';
import { DettagliPage } from './pages/dettagli.page';
import { ElencoArticoliComponent } from './elenco-articoli.component';
import { FormOrdineComponent } from './form-ordine.component';

const routes:Route[] = [
  {
    path:'',
    component: HomePage
  },
  {
    path:'carrello',
    component: CarrelloPage
  },
  {
    path:'dettagli',
    component: DettagliPage,
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    CarrelloPage,
    NavbarComponent,
    DettagliPage,
    ElencoArticoliComponent,
    FormOrdineComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
