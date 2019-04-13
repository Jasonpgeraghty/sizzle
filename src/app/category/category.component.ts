import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  queryValue: string;
  recipes: any;

  constructor(
    private recipeService: RecipesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private storage: StorageService
  ) {

    this.recipes = null;

    this.activeRoute.paramMap.subscribe(params => {

    const recipe = params.get('name');

    this.recipeService.searchRecipes(recipe)
    .subscribe(
      (recipes: any) => {
        if (recipes !== undefined) {
          console.log(recipes);
          this.recipes = recipes.hits;
        }
    });
    });
  }


  ngOnInit() {

  }

  goToRecipe(recipe) {
    console.log(recipe);
    if (this.storage.setRecipe(recipe)) {
      this.router.navigate([`recipe/${recipe.label
                            .split(' ').join('-')
                            .split('/').join('-')}`]);
    }
  }

}
