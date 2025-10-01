import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from '../../components/recipe/recipe.component';

@Component({
  selector: 'app-recipe-list',
  imports: [CommonModule, RecipeComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {}
