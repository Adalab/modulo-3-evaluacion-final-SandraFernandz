import { useState, useEffect } from 'react';
import getCharactersFromApi from '../services/charactersApi';
import CharactersList from './CharactersList';
import '../styles/App.scss';
import Filters from './Filters';
import { Switch, Route, useRouteMatch } from 'react-router';
import CharacterDetail from './CharacterDetail';

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
  const routeData = useRouteMatch('/character/:id');
  const characterId = routeData !== null ? routeData.params.id : '';

  const selectedContact = data.find(
    (character) => character.id === characterId
  );

  const filteredData = data.filter((character) =>
    character.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );
  return (
    <>
      <h1>Rick and Morty</h1>
      <div>
        <Switch>
          <Route path="/character/:id">
            <section>
              <CharacterDetail
                user={{
                  name: 'pepino',
                  species: 'pepino',
                  image: 'pepino',
                  id: 'pepino',
                }}
              />
            </section>
          </Route>

          <Route exact path="/">
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
          <Route>
            <section>¡Oh! Algo ha salido mal. Vuelve a intentarlo.</section>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
