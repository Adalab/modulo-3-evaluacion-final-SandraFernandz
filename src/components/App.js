import { useState, useEffect } from 'react';
import getCharactersFromApi from '../services/charactersApi';
import CharactersList from './CharactersList';
import '../styles/App.scss';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCharactersFromApi().then((initialData) => {
      console.log(initialData);
      setData(initialData);
    });
  }, []);

  return (
    <div>
      <h1>Rick and Morty</h1>
      <section>
        <form action="">
          <input type="text" />
        </form>
      </section>
      <section>
        <CharactersList data={data} />
      </section>
    </div>
  );
}

export default App;
