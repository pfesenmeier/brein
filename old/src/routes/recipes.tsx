import { RecipeList } from '../RecipeList';
import { recipes } from '../App';

export function RecipeListRoute() {
  return <RecipeList recipes={recipes} />;
}
