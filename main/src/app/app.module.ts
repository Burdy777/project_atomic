import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

const ROUTES: Routes = [
  { path: 'list-crisis', component: CrisisListComponent },
  { path: 'list-heroes', component: HeroesListComponent },
  ];
@NgModule({
   declarations: [
      AppComponent,
      CrisisListComponent,
      HeroesListComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(ROUTES)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
