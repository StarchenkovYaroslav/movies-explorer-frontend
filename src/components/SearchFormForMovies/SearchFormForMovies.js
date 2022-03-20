import "./SearchFormForMovies.css";

import SearchForm from "../SearchForm/SearchForm";

function SearchFormForMovies(props) {
  return (
    <SearchForm onSubmit={props.onSubmit} >
      <input
        required={true}
        className="search-form__input"
        type="text"
        name="movie"
        placeholder="Фильм"
        value={props.searchedMovie}
        onChange={props.onInputSearchedMovie}
      />
    </SearchForm>
  )
}

export default SearchFormForMovies;
