import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [
    {path: '/list-crisis', text: 'Crisis'},
    { path: '/list-heroes', text : 'Heroes' }
  ];
  title = 'main';
}
