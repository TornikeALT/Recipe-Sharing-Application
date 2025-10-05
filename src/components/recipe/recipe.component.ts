import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe',
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  @Input() recipe!: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }

  toggleFavourite(recipe: Recipe): void {
    const updatedRecipe = {
      ...recipe,
      isFavourite: !recipe.isFavourite,
    };
    this.recipeService.updateRecipe(recipe.id, updatedRecipe).subscribe();
  }
}
