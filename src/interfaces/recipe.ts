export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: { name: string; amount: string }[];
  instructions: string[];
  thumbnail: string;
}
