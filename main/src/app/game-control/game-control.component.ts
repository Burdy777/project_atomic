import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  title = 'main';
  second = 0;
  timeout;
  constructor() { }

  ngOnInit() {

  }

  increment() {
    this.timeout = setInterval(() => { this.second++; }, 1000);
  }

  stop() {
   clearInterval(this.timeout);
   console.log(this.timeout);
  }

}
