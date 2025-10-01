import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  jsonUrl = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.jsonUrl);
  }

  getRecipeById(id: string | null): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.jsonUrl}/${id}`);
  }
}
