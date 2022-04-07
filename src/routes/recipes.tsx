import { RecipeList } from '../RecipeList';
import { recipes } from '../App';

export function recipeListRoute() {
  return <RecipeList recipes={recipes} />;
}
