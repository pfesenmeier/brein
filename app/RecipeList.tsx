import { Recipe } from './Recipe';

export function RecipeList(props: { recipes: { name: string }[] }) {
  return (<ul>
        {props.recipes.map(recipe => <Recipe key={recipe.name} name={recipe.name} />)}
    </ul>);
}

