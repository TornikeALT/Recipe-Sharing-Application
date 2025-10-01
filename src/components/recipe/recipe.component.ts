import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }
}
