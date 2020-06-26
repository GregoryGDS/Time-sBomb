import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularSplitModule } from 'angular-split';

import { AppComponent } from './app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageCarteComponent } from './page-carte/page-carte.component';
import { GameComponent } from './game/game.component';



//Configuration des routes
const routes: Routes = [
  { path: 'accueil', component: PageHomeComponent },
  { path: 'carte', component: PageCarteComponent },
  { path: 'game', component: GameComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }
];


@NgModule({
  declarations: [ // liste des composants / directives ... qu'on utilise dans ce module
    AppComponent,
    PageHomeComponent,
    PageCarteComponent,
    GameComponent
  ],
  imports: [ // liste des Modules qu'on utilise dans ce module
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularSplitModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent] // quel composant on démarre
})
export class AppModule { }
