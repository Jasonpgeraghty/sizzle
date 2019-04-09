import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {

  constructor(
    private recipes: RecipesService
  ) {
    const data = this.recipes.searchRecipes('chicken')
    .subscribe(
      recipes => {
        console.log(recipes);
    });
  }

  ngOnInit() {
  }

}
