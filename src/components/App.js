import { useState, useEffect } from 'react';
import getCharactersFromApi from '../services/charactersApi';
import CharactersList from './CharactersList';
import '../styles/App.scss';

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    getCharactersFromApi().then((initialData) => {
      console.log(initialData);
      setData(initialData);
    });
  }, []);

  {
    /*función manejadora del input*/
  }

  const handleChangeSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };

  {
    /*función para filtrar por nombre y pasamos datos filtrados a map en CharactersList para que los pinte*/
  }

  const filteredData = data.filter((character) =>
    character.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );
  return (
    <div>
      <h1>Rick and Morty</h1>
      <section>
        <form action="">
          <label htmlFor="name">Encuentra un personaje</label>
          <input
            type="text"
            id="name"
            value={searchName}
            onChange={handleChangeSearchName}
          />
        </form>
      </section>
      <section>
        <CharactersList data={filteredData} />
      </section>
    </div>
  );
}

export default App;
