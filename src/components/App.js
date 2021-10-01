import { useState, useEffect } from 'react';
import getCharactersFromApi from '../services/charactersApi';
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
        <ul>
          <li>Aquí va un personaje</li>
          <li>Aquí va otro</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
