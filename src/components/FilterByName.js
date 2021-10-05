import '../styles/filterByName.scss';

function FilterByName(props) {
  return (
    <>
      <label htmlFor="name">Encuentra un personaje</label>
      <input
        className="form_input"
        type="text"
        id="name"
        value={props.searchName}
        onChange={props.handleChangeSearchName}
      />
    </>
  );
}

export default FilterByName;
