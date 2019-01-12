import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LocalStorageService } from 'src/services/local-storage.service';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';

// Rework lazyloading;
const Routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '' , redirectTo: 'login', pathMatch: 'full' },
  { path: 'account', component: MyAccountComponent,  },
  { path: 'account/:id', component: MyAccountComponent,  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes, {
      enableTracing: false,
    })
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
