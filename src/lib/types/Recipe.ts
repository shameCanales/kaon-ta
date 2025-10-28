export interface MeasureUnit {
  amount: number;
  unitShort: string;
  unitLong: string;
}

export interface Ingredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: {
    us: MeasureUnit;
    metric: MeasureUnit;
  };
}

export interface InstructionIngredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface InstructionEquipment {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface InstructionStep {
  number: number;
  step: string;
  ingredients: InstructionIngredient[];
  equipment: InstructionEquipment[];
}

export interface AnalyzedInstruction {
  name: string;
  steps: InstructionStep[];
}

export interface Recipe {
  id: number;
  image: string;
  imageType: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  vegetarian: boolean; 
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number | null;
  cookingMinutes: number | null;
  aggregateLikes: number; 
  healthScore: number;
  creditsText: string;
  license: string | null;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: Ingredient[];
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  spoonacularScore: number;
  spoonacularSourceUrl: string;
}

export interface RandomRecipesResponse {
  recipes: Recipe[];
}
