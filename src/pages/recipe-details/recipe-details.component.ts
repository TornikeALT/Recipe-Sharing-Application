import { Component } from '@angular/core';
import { DetailsComponent } from '../../components/details/details.component';

@Component({
  selector: 'app-recipe-details',
  imports: [DetailsComponent],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
})
export class RecipeDetailsComponent {}
