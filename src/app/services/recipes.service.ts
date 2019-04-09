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

  searchRecipes(query: string) {
    return this.http.get(`${this.url}?q=${query}`);
  }
}
