import './App.css';
import { Title } from './Title';

const siteBrand = 'Pickl';
const navLinks = ['Recipes'];

export const recipes = [{
  name: 'foo',
}, {
  name: 'bar',
}];

function App() {
  return (
    <div className="App">
      <Title brand={siteBrand} links={navLinks} />
      <p>This is the main page</p>
    </div>
  );
}

export default App;

