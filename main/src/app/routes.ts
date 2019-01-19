import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
  { path: 'list-crisis', component: CrisisListComponent },
  { path: '', redirectTo: 'list-crisis', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
  ];
