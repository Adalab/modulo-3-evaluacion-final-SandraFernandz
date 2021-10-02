import { Link } from 'react-router-dom';

function CharactersCard(props) {
  console.log('CharactersCard', props);
  return (
    <Link to={`./character/${props.charactersData.id}`}>
      <img src={props.charactersData.image} alt="" />
      <h4>{props.charactersData.name}</h4>
      <p>{props.charactersData.species}</p>
    </Link>
  );
}
export default CharactersCard;
