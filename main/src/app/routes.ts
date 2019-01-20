import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found-component.ts/not-found-component';
import { FoodComponent } from './food/food.component';

export const APP_ROUTES: Routes = [
{path: 'food', component: FoodComponent},
{path: '', redirectTo: 'food', pathMatch: 'full'},
{path: '**', component: NotFoundComponent },

];
