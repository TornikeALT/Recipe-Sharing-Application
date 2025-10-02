import { Component } from '@angular/core';
import { NewComponent } from '../../components/new/new.component';

@Component({
  selector: 'app-recipe-form',
  imports: [NewComponent],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css',
})
export class RecipeFormComponent {}
