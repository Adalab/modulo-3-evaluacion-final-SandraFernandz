import '../styles/filters.scss';
import FilterBySpecies from './FilterBySpecies';
import FilterByName from './FilterByName';

function Filters(props) {
  return (
    <form action="" className="form">
      <FilterByName
        searchName={props.searchName}
        handleChangeSearchName={props.handleChangeSearchName}
      />
      {/* <label htmlFor="name">Encuentra un personaje</label>
      <input
        className="form_input"
        type="text"
        id="name"
        value={props.searchName}
        onChange={props.handleChangeSearchName}
      /> */}
      <FilterBySpecies
        searchSpecies={props.searchSpecies}
        handleSearchSpecies={props.handleSearchSpecies}
      />
    </form>
  );
}

export default Filters;
