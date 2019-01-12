import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

constructor() { }
/**
 * set Item In localStorage
 */
public setItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

/**
 * get Item In localStorage
 */
public getItem(key: string): string {
  return localStorage.getItem(key);
}

/**
 * get length propreties in localStorage
 */
public getCount(): number {
  return localStorage.length;
}
}
