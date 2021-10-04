import '../styles/filters.scss';

function Filters(props) {
  return (
    <form action="" className="form">
      <label htmlFor="name">Encuentra un personaje</label>
      <input
        className="form_input"
        type="text"
        id="name"
        value={props.searchName}
        onChange={props.handleChangeSearchName}
      />
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
    </form>
  );
}

export default Filters;
