import CharactersCard from './CharactersCard';
import '../styles/charactersList.scss';

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
          <input
            type="button"
            value="Volver"
            className="unknown_container_button"
            onClick={props.handleBackHome}
          />
        </p>
      </div>
    );
  } else {
    return <ul className="list">{html}</ul>;
  }
}

export default CharactersList;
