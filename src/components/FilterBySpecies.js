function FilterBySpecies(props) {
  return (
    <>
      <label htmlFor="species">Selecciona por especie</label>
      <select
        className="form_input"
        name="species"
        id="species"
        value={props.searchSpecies}
        onChange={props.handleSearchSpecies}
      >
        <option value="all">Todas</option>
        <option value="human">Humano</option>
        <option value="alien">Alien</option>
      </select>
    </>
  );
}

export default FilterBySpecies;
