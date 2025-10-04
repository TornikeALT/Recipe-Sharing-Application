import { Routes } from '@angular/router';
import { RecipeListComponent } from '../pages/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from '../pages/recipe-details/recipe-details.component';
import { RecipeFormComponent } from '../pages/recipe-form/recipe-form.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { EditRecipeComponent } from '../components/edit-recipe/edit-recipe.component';

export const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipe-details/:id', component: RecipeDetailsComponent },
  { path: 'recipe-edit/:id', component: EditRecipeComponent },
  { path: 'recipe-form', component: RecipeFormComponent },
  { path: '**', component: NotFoundComponent },
];
