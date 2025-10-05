export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: { name: string; amount: string }[];
  instructions: string[];
  thumbnail: string;
  isNew: boolean;
  isFavourite?: boolean;
}
