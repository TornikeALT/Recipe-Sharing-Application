import { Component } from '@angular/core';
import { NewRecipeComponent } from '../../components/new-recipe/new-recipe.component';

@Component({
  selector: 'app-recipe-form',
  imports: [NewRecipeComponent],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css',
})
export class RecipeFormComponent {}
