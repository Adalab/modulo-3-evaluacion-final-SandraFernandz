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
    return <p>Este personaje no existe</p>;
  } else {
    return <ul className="list">{html}</ul>;
  }
}

export default CharactersList;
