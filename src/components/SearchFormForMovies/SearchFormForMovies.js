import "./SearchFormForMovies.css";

import SearchForm from "../SearchForm/SearchForm";

function SearchFormForMovies(props) {
  const moviePlaceholder = !props.isFormMessageVisible ? 'Фильм' : props.formMessage;

  const isInputActive = !props.areMoviesLoading;

  return (
    <SearchForm onSubmit={props.onSubmit} areMoviesLoading={props.areMoviesLoading}>
      <input
        required={true}
        className="search-form__input"
        type="text"
        name="movie"
        placeholder={moviePlaceholder}
        value={props.searchedMovie}
        onChange={props.onInputSearchedMovie}
        disabled={!isInputActive}
      />
    </SearchForm>
  )
}

export default SearchFormForMovies;
