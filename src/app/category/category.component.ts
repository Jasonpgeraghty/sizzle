import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {

  private queryValue: string;
  private recipes: any;

  constructor(
    private recipeService: RecipesService
  ) {
    this.recipeService.searchRecipes('chicken')
    .subscribe(
      (recipes: any) => {
        this.recipes = recipes.hits;
        console.log(recipes.hits);
    });
  }


  ngOnInit() {

  }

}
