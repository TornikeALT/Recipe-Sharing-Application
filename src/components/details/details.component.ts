import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe!: Recipe;
  deleteMsg: string = '';
  showDeleteModal: boolean = false;
  recipeToDeleteId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  openDeleteModal(id: string) {
    this.recipeToDeleteId = id;
    this.showDeleteModal = true;
  }

  cancelDelete() {
    this.recipeToDeleteId = null;
    this.showDeleteModal = false;
  }

  confirmDelete() {
    if (!this.recipeToDeleteId) return;

    this.recipeService.deleteRecipe(this.recipeToDeleteId).subscribe(() => {
      this.recipes = this.recipes.filter(
        (el) => el.id !== this.recipeToDeleteId
      );
      this.deleteMsg = 'Recipe deleted Successfully';
      this.showDeleteModal = false;
      this.recipeToDeleteId = null;

      setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000);
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipeById(id).subscribe((data: Recipe) => {
      this.recipe = data;
    });
  }
}
