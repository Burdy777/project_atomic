import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OldComponent } from './old/old.component';
import { NumberComponent } from './number/number.component';

@NgModule({
   declarations: [
      AppComponent,
      GameControlComponent,
      EvenComponent,
      OldComponent,
      NumberComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
