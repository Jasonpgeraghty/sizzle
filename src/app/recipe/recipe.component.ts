import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { NavigateBackService } from '../services/navigate-back.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(
    private storage: StorageService,
    private navigation: NavigateBackService,
    private router: Router
  ) { }

  recipe: any;
  feedbackMsg = 0;

  ngOnInit() {
    this.recipe = null;
    this.recipe = this.storage.getRecipe();
    const recipeName = this.recipe.label
                      .split('-')
                      .join(' ');

    const currentRoute = this.navigation
                        .removeSlashes(this.navigation
                        .getCurrentRoute()
                        .split('-')
                        .join(' '));

    if (recipeName !== currentRoute) {
      this.router.navigate(['page-not-found']);
    }
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
