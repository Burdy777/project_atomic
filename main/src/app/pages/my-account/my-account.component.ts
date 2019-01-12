import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/services/local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  user: string;
  fetchRoute;

  constructor(private storage: LocalStorageService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.storage.getItem('name');
  }




}
