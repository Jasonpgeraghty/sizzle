import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {

  queryValue: string;
  recipes: any;

  constructor(
    private recipeService: RecipesService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activeRoute.paramMap.subscribe(params => {

    const recipe = params.get('name');

    this.recipeService.searchRecipes(recipe)
    .subscribe(
      (recipes: any) => {
        if (recipes !== undefined) {
          this.recipes = recipes.hits;
          console.log(recipes.hits);
        }
    });
    });
  }


  ngOnInit() {

  }

}
