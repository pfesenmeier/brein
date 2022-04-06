import './App.css';
import { Title } from './Title';
import ListGroup from 'react-bootstrap/ListGroup';
import { Recipe } from './Recipe';

function RecipeList(props: { recipes: { name: string }[] }) {
    return (<ListGroup>
        {props.recipes.map(recipe => <Recipe key={recipe.name} name={recipe.name} />)}
    </ListGroup>);
}

function App() {
    const recipes = [{
        name: 'foo',
    }, {
        name: 'bar',
    }];

    return (
        <div className="App">
            <Title brand={'Pckl'} links={['Recipes']} />
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default App;

