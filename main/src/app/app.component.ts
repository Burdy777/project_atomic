import { Component, ViewChild, OnInit } from '@angular/core';
import { User } from 'src/model/user';
import { LocalStorageService } from 'src/services/local-storage.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  error: boolean;
  userValid: User = { name: 'burdy', password: 'goureige'};
  user: User = { name: '', password: ''};
  @ViewChild('form') form: NgForm;
 constructor( private storage: LocalStorageService ) {}
  ngOnInit() {}

  public isSubmited () {
    const {name, password} = this.form.value;
    const user = { name: name, password: password};
    if (name === this.userValid.name && password === this.userValid.password) {
      for (const key in user ) {
        if (user.hasOwnProperty(key)) {
          this.storage.setItem(key, user[key]);
        }
      }
      this.error = false;
      this.form.resetForm();
    } else {
      this.error = true;
    }
    }
}
