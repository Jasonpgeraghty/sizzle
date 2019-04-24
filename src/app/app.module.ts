import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import {HttpClient} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesService } from './services/recipes.service';
import { LocationService } from './services/location.service';
import { GeolocationService } from './services/geolocation.service';
import { FavouritesComponent } from './favourites/favourites.component';
import { SearchComponent } from './search/search.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { CountryComponent } from './country/country.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsComponent } from './settings/settings.component';

export function HttpLoaderFactory(client: HttpClient) {
  return new TranslateHttpLoader(client);
 }

const translateModule = TranslateModule.forRoot({loader: {
provide : TranslateLoader,
useFactory: HttpLoaderFactory,
deps : [HttpClient]
}});

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    RecipeComponent,
    FavouritesComponent,
    SearchComponent,
    IngredientsComponent,
    CountryComponent,
    PageNotFoundComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxSpinnerModule,
    translateModule
  ],
  providers: [
    RecipesService,
    LocationService,
    GeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

