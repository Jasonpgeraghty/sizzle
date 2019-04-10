import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  coords = undefined;
  recipes = undefined;
  favourites = undefined;

  constructor(
  ) {
    if (!localStorage.getItem('recipes')) {
      this.initialiseStorage();
    }
  }

  initialiseStorage() {
    localStorage.setItem('coords', this.coords);
    localStorage.setItem('recipes', this.recipes);
    localStorage.setItem('favourites', this.favourites);
  }





}
