function Filters(props) {
  return (
    <form action="">
      <label htmlFor="name">Encuentra un personaje</label>
      <input
        type="text"
        id="name"
        value={props.searchName}
        onChange={props.handleChangeSearchName}
      />
    </form>
  );
}

export default Filters;
