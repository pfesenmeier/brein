import './App.css';
import { Title } from './Title';
import Button from '@mui/material/Button';

function Recipe(props: { name: string }) {
    return (<li>{props.name}</li>);
}

function RecipeList(props: { recipes: { name: string }[] }) {
    return (<ul>
        {props.recipes.map(recipe => <Recipe name={recipe.name} />)}
    </ul>);
}

function App() {
    const recipes = [{
        name: 'foo',
    }, {
        name: 'bar',
    }];
    return (
        <div className="App">
            <Title text={'Recipes'} />
            <RecipeList recipes={recipes} />
            <Button>Click me</Button>
       </div>
    );
}

export default App;

