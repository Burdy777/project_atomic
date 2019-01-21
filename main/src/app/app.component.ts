import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Exo 5 Udemy course';
  second = 0;
  timeout;
  size = 10;
  numbers: [] = [];


  constructor() { }

  ngOnInit() { }

  increment() {
    this.timeout = setInterval(() => { this.second++; }, 1000);
  }

  stop() {
   clearInterval(this.timeout);
   this.numbers.push(this.timeout);

  }

  setSize(event: boolean) {
    event ? this.size++ : this.size--;
  }
}
