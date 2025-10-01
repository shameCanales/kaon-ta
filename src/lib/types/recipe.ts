export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  healthScore: number;
}

export interface RandomRecipesResponse {
  recipes: Recipe[];
}
