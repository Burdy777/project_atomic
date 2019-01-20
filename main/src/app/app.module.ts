import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FoodService } from './service/food.service';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found-component.ts/not-found-component';
import { AppRoutingModule } from './routing.module';
import { FoodComponent } from './food/food.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
   declarations: [
      AppComponent,
      NotFoundComponent,
      FoodComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule,
      PrimeNgModule
   ],
   providers: [
      FoodService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
