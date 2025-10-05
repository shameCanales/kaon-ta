export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  healthScore: number;
  pricePerServing: number;
  dishTypes: string[];
}

export interface RandomRecipesResponse {
  recipes: Recipe[];
}
