import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable(
  {providedIn: 'root'}
  )

export class FoodService {
private url_backend = 'https://food-bc2bc.firebaseio.com/';
token = "AIzaSyAJ_fSonU_uaSR0It-fIKrOCfo4ow2ZBdo";
constructor(private httpClient: HttpClient) {}

postFood (food) {
  return this.httpClient.post(this.url_backend + '.json', food);
}

getFood (food) {
  return this.httpClient.get(this.url_backend + '.json');
}

deleteFood (food) {
  return this.httpClient.delete(this.url_backend + '.json');
}
}
