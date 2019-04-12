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

    console.log(this.recipe);
    if (recipeName !== currentRoute) {
      this.router.navigate(['page-not-found']);
    }
  }
}
