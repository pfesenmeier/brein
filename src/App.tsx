import './App.css';

function Title(props: { text: string }) {

    return (<h1>
        {props.text}
    </h1>);
}

function App() {
    return (
        <div className="App">
            <Title text={'Recipes'} />
        </div>
    );
}

export default App;
