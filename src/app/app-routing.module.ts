import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'component', component: CategoryComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: '**', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
