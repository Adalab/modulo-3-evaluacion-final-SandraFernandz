function CharacterDetail(props) {
  return (
    <section>
      <img src={props.charactersData.image} alt="" />
      <ul>
        <li>
          <h4>Nombre: {props.charactersData.name}</h4>
        </li>
        <li>
          <p>Especie: {props.charactersData.species}</p>
        </li>
      </ul>
    </section>
  );
}

export default CharacterDetail;
