function CharacterDetail(props) {
  return (
    <section>
      <img
        src={props.character.image}
        alt={`Esta es la foto de ${props.character.name}`}
      />
      <ul>
        <li>Nombre: {props.character.name}</li>
        <li>Especie: {props.character.species}</li>
        <li>Estado: {props.character.status}</li>
        <li>Planeta: {props.character.planet}</li>
        <li>Número de episodios: {props.character.episodes}</li>
      </ul>
    </section>
  );
}

export default CharacterDetail;
