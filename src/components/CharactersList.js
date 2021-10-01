import CharactersCard from './CharactersCard';

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

  console.log(props);
  return <ul>{html}</ul>;
}

export default CharactersList;
