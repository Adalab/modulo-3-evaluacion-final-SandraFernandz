import { useState, useEffect } from 'react';
import getCharactersFromApi from '../services/charactersApi';
import CharactersList from './CharactersList';
import '../styles/App.scss';
import Filters from './Filters';
import { Switch, Route } from 'react-router';

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
    <>
      <h1>Rick and Morty</h1>
      <div>
        <Switch>
          <Route path="/">
            <section>
              <Filters
                searchName={searchName}
                handleChangeSearchName={handleChangeSearchName}
              />
            </section>
            <section>
              <CharactersList data={filteredData} />
            </section>
          </Route>
          <Route path="/user/:id">
            <section>Aquí va el componente que todavía no he hecho.</section>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
