import CharactersCard from './CharactersCard';
import '../styles/charactersList.scss';
import arrow from '../images/arrow.png';
import { Link } from 'react-router-dom';

function CharactersList(props) {
  console.log('CharactersList', props);
  // hago map del array
  const html = props.data.map((charactersData) => {
    return (
      <li key={charactersData.id}>
        <CharactersCard charactersData={charactersData} />
      </li>
    );
  });
  if (props.data.length === 0) {
    return (
      <div className="unknown">
        <p className="unknown_message">Lo sentimos, ese personaje no existe.</p>
        <p className="unknown_container">
          <img
            src={arrow}
            className="unknown_container_arrow"
            alt="Flecha para regresar a página principal"
          />
          <Link to="/" className="unknown_container_link">
            Volver
          </Link>
        </p>
      </div>
    );
  } else {
    return <ul className="list">{html}</ul>;
  }
}

export default CharactersList;
