import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  recipe!: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipeById(id).subscribe((data: Recipe) => {
      this.recipe = data;
    });
  }
}
