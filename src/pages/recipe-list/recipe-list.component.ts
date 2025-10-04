import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from '../../components/recipe/recipe.component';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  imports: [CommonModule, RecipeComponent, FormsModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  searchRecipe: string = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data;
      this.filteredRecipes = data;
    });
  }

  filterRecipes() {
    const term = this.searchRecipe.toLowerCase();

    this.filteredRecipes = this.recipes.filter((recipe) => {
      const mathesTitle = recipe.title.toLowerCase().includes(term);
      const matchesIngredient = recipe.ingredients.some((ing) =>
        ing.name.toLowerCase().includes(term)
      );
      return mathesTitle || matchesIngredient;
    });
  }
}
