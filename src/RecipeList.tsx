import ListGroup from 'react-bootstrap/ListGroup';
import { Recipe } from './Recipe';


export function RecipeList(props: { recipes: { name: string }[] }) {
  return (<ListGroup>
        {props.recipes.map(recipe => <Recipe key={recipe.name} name={recipe.name} />)}
    </ListGroup>);
}

