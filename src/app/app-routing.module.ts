import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SearchComponent } from './search/search.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { CountryComponent } from './country/country.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'category/:name', component: CategoryComponent},
  {path: 'recipe/:name', component: RecipeComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'search', component: SearchComponent},
  {path: 'ingredients', component: IngredientsComponent},
  {path: 'country', component: CountryComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
