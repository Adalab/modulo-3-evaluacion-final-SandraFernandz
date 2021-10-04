import { Link } from 'react-router-dom';
import '../styles/charactersCard.scss';

function CharactersCard(props) {
  console.log('CharactersCard', props);
  return (
    <Link to={`./character/${props.charactersData.id}`} className="card">
      <img
        className="card_picture"
        src={props.charactersData.image}
        alt={`Esta es la foto de ${props.charactersData.name}`}
      />
      <div className="card_description">
        <h4>{props.charactersData.name}</h4>
        <p>{props.charactersData.species}</p>
      </div>
    </Link>
  );
}
export default CharactersCard;
