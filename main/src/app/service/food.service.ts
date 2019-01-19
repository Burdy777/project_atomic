import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable(
  {providedIn: 'root'}
  )

export class FoodService {
private url_backend = '//food-bc2bc.firebaseio.com/';
 constructor(private httpClient: HttpClient) {}

postFood(food) {
  this.httpClient.post<any>(this.url_backend, food);
}
}
