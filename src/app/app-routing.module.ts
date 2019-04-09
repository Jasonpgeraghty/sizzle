import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'category/:name', component: CategoryComponent},
  {path: 'recipe/:name', component: RecipeComponent},
  {path: 'favourites', component: RecipeComponent},//to finish
  {path: 'search', component: RecipeComponent},//to finish
  {path: 'ingredients', component: RecipeComponent},//to finish
  {path: 'country', component: RecipeComponent},//to finish
  {path: '**', component: CategoriesComponent}//to finish
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
