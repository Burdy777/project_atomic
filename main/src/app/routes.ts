import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found-component.ts/not-found-component';

export const APP_ROUTES: Routes = [
{path: 'food', component: AppComponent},
{path: '', redirectTo: 'food', pathMatch: 'full'},
{path: '**', component: NotFoundComponent },

];
