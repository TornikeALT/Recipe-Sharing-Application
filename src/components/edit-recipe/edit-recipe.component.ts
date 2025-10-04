import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-recipe',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css',
})
export class EditRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  recipeId!: string | null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.fb.array([]),
      instructions: this.fb.array([]),
      thumbnail: [''],
    });
  }

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipeById(this.recipeId).subscribe((recipe) => {
      this.recipeForm.patchValue({
        title: recipe.title,
        description: recipe.description,
        thumbnail: recipe.thumbnail,
      });
      this.setIngredients(recipe.ingredients);
      this.setInstructions(recipe.instructions);
    });
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get instructions(): FormArray {
    return this.recipeForm.get('instructions') as FormArray;
  }

  setIngredients(ingredients: { name: string; amount: string }[]) {
    this.ingredients.clear();
    ingredients.forEach((ing) => {
      this.ingredients.push(
        this.fb.group({
          name: [ing.name],
          amount: [ing.amount],
        })
      );
    });
  }

  setInstructions(instructions: string[]) {
    this.instructions.clear();
    instructions.forEach((inst) => {
      this.instructions.push(this.fb.control(inst));
    });
  }

  addIngredient() {
    this.ingredients.push(this.fb.group({ name: '', amount: '' }));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  addInstruction() {
    this.instructions.push(this.fb.control(''));
  }

  removeInstruction(index: number) {
    this.instructions.removeAt(index);
  }

  onSubmit() {
    if (this.recipeForm.invalid) return;

    const updatedRecipe: Recipe = {
      id: this.recipeId,
      ...this.recipeForm.value,
    };
    this.recipeService
      .updateRecipe(this.recipeId, updatedRecipe)
      .subscribe(() => {
        alert('Recipe Updated!');
        this.router.navigate(['/recipe-details', this.recipeId]);
      });
  }
}
