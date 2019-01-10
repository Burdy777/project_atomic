import { Component } from '@angular/core';
import { User } from 'src/model/user';
import { LocalStorageService } from 'src/services/local-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  error: boolean;
  userValid: User = { name: 'burdy', password: 'goureige'};
  user: User = { name: '', password: ''};
 constructor( private storage:LocalStorageService ) {}


  public isSubmited (event: Event) {
    const name: string = event.target[0].value;
    const password: string = event.target[1].value;
    const user = { name: name, password: password};
    if (name === this.userValid.name && password === this.userValid.password) {
      for (const key in user ) {
        if (user.hasOwnProperty(key)) {
          this.storage.setItem(key, user[key]);
        }
      }
    } else {
      this.error = true;
    }
    }
}
