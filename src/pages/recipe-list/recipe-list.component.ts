import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  imports: [CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Recipe[]>('http://localhost:3000/recipes')
      .subscribe((data) => {
        this.recipes = data;
      });
  }
}
