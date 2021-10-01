function CharactersCard(props) {
  console.log('CharactersCard', props);
  return (
    <>
      <img src={props.charactersData.image} alt="" />
      <h4>{props.charactersData.name}</h4>
      <p>{props.charactersData.species}</p>
    </>
  );
}
export default CharactersCard;
