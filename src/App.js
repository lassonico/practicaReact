import imagenRickYMorty from './img/rick-morty.png'
import './App.css';
import {useState, Fragment} from 'react'
import Caracters from './components/Caracters';

function App() {

  const [ characters, setCharacters ] = useState(null)

  const recApi = async() => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json()
    setCharacters(characterApi.results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Caracters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <Fragment>
            <img src={imagenRickYMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={recApi} className="btn-search">Buscar personajes</button>
          </Fragment>
        )}
      </header>
    </div>
  );
}

export default App;
