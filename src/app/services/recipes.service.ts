import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private http: HttpClient
  ) { }
  private url = 'https://api.edamam.com/search';
  private credentials = '&app_id=8b4dd0c9&app_key=502781d3fd4f0135bc4e1ce880982d88';

  searchRecipes(query: string) {
    return this.http.get(`${this.url}?q=${query + this.credentials}`);
  }
}
