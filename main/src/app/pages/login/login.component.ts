import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from 'src/services/local-storage.service';
import { User } from 'src/model/user';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  error: boolean;
  userValid: User = { name: 'aaa', password: 'a'};
  user = new User({name: '', password: ''});
  constructor( private storage: LocalStorageService, private router: Router) {}

  ngOnInit() { }

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
      this.router.navigate(['/account']);
    } else {
      this.error = true;
    }
    }

}
