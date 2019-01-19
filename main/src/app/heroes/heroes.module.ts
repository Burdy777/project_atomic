import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { RouterModule } from '@angular/router';
import { ROUTES_HEROES } from './routes-heroes';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    RouterModule.forRoot(ROUTES_HEROES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class HeroesModule { }
