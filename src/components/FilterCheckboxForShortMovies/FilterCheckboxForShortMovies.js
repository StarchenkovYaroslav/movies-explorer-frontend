import "./FilterCheckboxForShortMovies.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function FilterCheckboxForShortMovies(props) {
  return (
    <FilterCheckbox isChecked={props.isShortMoviesChosen}>
      <input className="checkbox__input" type="checkbox" value="short" onChange={props.onChooseShortMovies}/>
      <span className="checkbox__name">Короткометражки</span>
    </FilterCheckbox>
  )
}

export default FilterCheckboxForShortMovies;
