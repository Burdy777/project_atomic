import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
ngForm: NgForm;
foods = {restaurant: '', food: ''};
  constructor(public foodservice: FoodService) { }

  ngOnInit() {
  }

  submit(e) {
    console.log(e)
    this.foodservice.getFood(e).subscribe(res => console.log(res));
  }
}
