import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css',
})
export class NewRecipeComponent {
  recipeForm: FormGroup;
  selectedFile: File | null = null;
  preview: string = '';

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router
  ) {
    this.recipeForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(12)]],
      ingredients: this.fb.array([
        this.fb.group({
          name: ['', Validators.required],
          amount: ['', Validators.required],
        }),
      ]),
      instructions: this.fb.array([this.fb.control('', Validators.required)]),
      thumbnail: ['', Validators.required],
    });
  }

  get title() {
    return this.recipeForm.get('title');
  }

  get description() {
    return this.recipeForm.get('description');
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }
  get instructions() {
    return this.recipeForm.get('instructions') as FormArray;
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

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.preview = reader.result as string;
        this.recipeForm
          .get('thumbnail')
          ?.setValue(`/${this.selectedFile!.name}`);
        this.recipeForm.get('thumbnail')?.markAsTouched();
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit() {
    if (this.recipeForm.invalid) {
      return;
    }
    const formValue = this.recipeForm.value;

    const recipe: Omit<Recipe, 'id'> = {
      title: formValue.title,
      description: formValue.description,
      ingredients: formValue.ingredients,
      instructions: formValue.instructions,
      thumbnail: this.selectedFile ? `/${this.selectedFile.name}` : '',
    };
    this.recipeService.addRecipe(recipe).subscribe((newRecipe) => {
      alert('recipe add');
      this.router.navigate(['/recipe-details', newRecipe.id]);
      this.recipeForm.reset();
      this.preview = '';
    });
  }
}
