import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  coords = undefined;
  recipes = undefined;
  recipe = undefined;
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
    localStorage.setItem('recipes', this.recipe);
    localStorage.setItem('favourites', this.favourites);
  }

  setRecipes(recipes) {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }

  setRecipe(recipe) {
    localStorage.setItem('recipe', JSON.stringify(recipe));
    return true;
  }

  getRecipe() {
    return JSON.parse(localStorage.getItem('recipe'));
  }





}
