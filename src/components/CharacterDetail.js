import '../styles/characterDetail.scss';
import { Link } from 'react-router-dom';
import arrow from '../images/arrow.png';

function CharacterDetail(props) {
  if (props.character === undefined) {
    return (
      <section className="notFound">
        <p>Ese personaje no existe</p>
        <p className="notFound_container">
          <Link to="/" className="notFound_link">
            Volver
            <img
              src={arrow}
              className="notFound_arrow"
              alt="Flecha para regresar a página principal"
            />
          </Link>
        </p>
      </section>
    );
  } else {
    return (
      <section className="detail">
        <p className="detail_container">
          <img
            src={arrow}
            className="detail_arrow"
            alt="Flecha para regresar a página principal"
          />
          <Link className="detail_container_link" to="/">
            Volver
          </Link>
        </p>
        <img
          src={props.character.image}
          alt={`Esta es la foto de ${props.character.name}`}
        />
        <ul className="detail_list">
          <li>Nombre: {props.character.name}</li>
          <li>Especie: {props.character.species}</li>
          <li>Estado: {props.character.status}</li>
          <li>Planeta: {props.character.planet}</li>
          <li>Número de episodios: {props.character.episodes}</li>
        </ul>
      </section>
    );
  }
}

export default CharacterDetail;
