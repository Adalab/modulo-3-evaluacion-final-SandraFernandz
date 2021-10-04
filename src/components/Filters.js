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
    </form>
  );
}

export default Filters;
