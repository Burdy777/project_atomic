import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesRoutingModule } from './heroes/heroes-routing.module';


@NgModule({
   declarations: [
      AppComponent,
      CrisisListComponent,
      HeroesListComponent,
      NotFoundComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HeroesRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
