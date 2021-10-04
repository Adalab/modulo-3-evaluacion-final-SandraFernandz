import { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import getCharactersFromApi from '../services/charactersApi';
import CharactersList from './CharactersList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Header from './Header';

import '../styles/app.scss';

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    getCharactersFromApi().then((initialData) => {
      console.log(initialData);
      setData(initialData);
    });
  }, []);

  const handleChangeSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };

  const routeData = useRouteMatch('/character/:id');
  console.log(routeData);

  const characterId = routeData !== null ? routeData.params.id : '';

  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );

  console.log(selectedCharacter);

  const filteredData = data.filter((character) =>
    character.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );
  // .filter((character)=> character.species === searchSpecies);
  return (
    <>
      <Header />

      <div className="all">
        <Switch>
          <Route path="/character/:id">
            <section>
              <CharacterDetail character={selectedCharacter} />
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
            <section>
              <p>¡Oh! Algo ha salido mal. Vuelve a intentarlo.</p>
            </section>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
