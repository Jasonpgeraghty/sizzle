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
  feedbackMsg = 0;

  ngOnInit() {
    this.recipe = null;
    this.recipe = this.storage.getRecipe();
  }

  favourite() {
    const bool = this.storage.setFavourite(this.recipe);
    if (bool) {
      this.feedbackMsg = 1;
      setTimeout(() => this.feedbackMsg = 0, 5100);
    } else {
      this.feedbackMsg = 2;
      setTimeout(() => this.feedbackMsg = 0, 5100);
    }
  }
}
