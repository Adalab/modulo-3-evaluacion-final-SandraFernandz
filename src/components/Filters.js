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

      <FilterBySpecies
        searchSpecies={props.searchSpecies}
        handleSearchSpecies={props.handleSearchSpecies}
      />
    </form>
  );
}

export default Filters;
