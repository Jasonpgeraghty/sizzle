import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private storage: StorageService,
    private spinner: NgxSpinnerService
  ) {
  }


  ngOnInit() {
     this.recipes = null;

     if (this.recipes === null) {
         this.spinner.show();
     } else {
      this.spinner.hide();
     }

     this.activeRoute.paramMap.subscribe(params => {

      const recipe = params.get('name');

      const storedRecipe = this.storage.getRecipes();

      let storedRecipeName: string;

      if (storedRecipe !== undefined) {
        storedRecipeName = storedRecipe.q;
      }

      if (storedRecipeName !== recipe) {
        this.recipeService.searchRecipes(recipe)
        .subscribe(
          (recipes: any) => {
            if (recipes !== undefined) {
              this.recipes = recipes.hits;
              this.storage.setRecipes(recipes);
              setTimeout(() => {
                this.spinner.hide();
              }, 1500);
            }
        });
      } else {
        console.log(this.recipes);
        this.recipes = storedRecipe.hits;
        setTimeout(() => {
          this.spinner.hide();
        }, 1500);
      }
    });
  }

  goToRecipe(recipe) {
    if (this.storage.setRecipe(recipe)) {
      this.router.navigate([`recipe/${recipe.label
                            .split(' ').join('-')
                            .split('/').join('-')
                            .split('(').join('-')
                            .split(')').join('-')
                            .split('/').join('-')}`]);
    }
  }

}
