import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(
    private storage: StorageService
  ) { }

  recipe: any;

  ngOnInit() {
    this.recipe = null;
    this.recipe = this.storage.getRecipe();
    console.log(this.recipe);
  }

  convertNum(string) {
    parseFloat(string);
  }

}
