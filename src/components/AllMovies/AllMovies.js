import "./AllMovies.css";

import {useState} from "react";

import moviesApi from "../../utils/MoviesApi";

import Search from "../Search/Search";
import AllMoviesCardList from "../AllMoviesCardList/AllMoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";

function AllMovies() {
  const [isShortMoviesChosen, setIsShortMoviesChosen] = useState(false);
  const [searchedMovie, setSearchedMovie] = useState('');

  const [movies, setMovies] = useState([]);

  const [areMoviesLoading, setAreMoviesLoading] = useState(false);

  function handleChooseShortMovies(evt) {
    setIsShortMoviesChosen(evt.target.checked);
  }

  function handleInputSearchedMovie(evt) {
    setSearchedMovie(evt.target.value);
  }

  function handleSearchMovie(evt) {
    evt.preventDefault();

    setAreMoviesLoading(true);

    moviesApi.getAllMovies()
      .then(loadedMovies => {
        setMovies(loadedMovies);

        localStorage.setItem('allMovies', JSON.stringify(loadedMovies));
      })
      .catch(status => {
        console.log(status);
      })
      .finally(() => {
        setAreMoviesLoading(false);
      });
  }

  return (
    <div className="all-movies">
      <Search
        searchedMovie={searchedMovie}
        isShortMoviesChosen={isShortMoviesChosen}

        onChooseShortMovies={handleChooseShortMovies}
        onInputSearchedMovie={handleInputSearchedMovie}
        onSearch={handleSearchMovie}
      />

      <AllMoviesCardList movies={movies} />

      {movies.length !== 0 ? <MoreMovies /> : null}
    </div>
  );
}

export default AllMovies;
