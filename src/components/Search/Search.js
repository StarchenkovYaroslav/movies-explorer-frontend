import "./Search.css";
import SearchFormForMovies from "../SearchFormForMovies/SearchFormForMovies";
import FilterCheckboxForShortMovies from "../FilterCheckboxForShortMovies/FilterCheckboxForShortMovies";

function Search(props) {
  return (
    <section className="search">
      <div className="search__form">
        <SearchFormForMovies
          searchedMovie={props.searchedMovie}
          onInputSearchedMovie={props.onInputSearchedMovie}
          onSubmit={props.onSearch}
        />
      </div>
      <FilterCheckboxForShortMovies
        isShortMoviesChosen={props.isShortMoviesChosen}
        onChooseShortMovies={props.onChooseShortMovies}
      />
    </section>
  )
}

export default Search;
