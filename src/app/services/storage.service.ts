import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  coords = undefined;
  recipes = undefined;
  recipe = undefined;
  favourites = [];

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
    localStorage.setItem('favourites', this.favourites.toString());
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

  getFavourites() {
    let favs = localStorage.getItem('favourites');
    if ( favs === '') {
      favs = '[]';
    }
    return JSON.parse(favs);
  }

  setFavourite(recipe) {
    let favourites = this.getFavourites();
    let checkMatch = false;
    for (const favourite in favourites) {
      if (favourites[favourite].label === recipe.label) {
        checkMatch = true;
      }
    }
    if (checkMatch !== true) {
      favourites.push(recipe);
      favourites = JSON.stringify(favourites);
      localStorage.setItem('favourites', favourites);
      return true;
    } else {
      return false;
    }
  }
}
