import "./AllMovies.css";

import {useEffect, useState} from "react";

import moviesApi from "../../utils/MoviesApi";

import Search from "../Search/Search";
import AllMoviesCardList from "../AllMoviesCardList/AllMoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";

function AllMovies() {
  const [isShortMoviesChosen, setIsShortMoviesChosen] = useState(false);
  const [searchedMovie, setSearchedMovie] = useState('');

  const [allMovies, setAllMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]);

  const [areMoviesLoading, setAreMoviesLoading] = useState(false);

  useEffect(() => {
    setShowedMovies(allMovies.slice(0, 3));
  }, [allMovies])

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
        setAllMovies(loadedMovies);

        localStorage.setItem('allMovies', JSON.stringify(loadedMovies));
      })
      .catch(status => {
        console.log(status);
      })
      .finally(() => {
        setAreMoviesLoading(false);
      });
  }

  function handleMoreMovies() {
    for (let i = showedMovies.length; i < showedMovies.length + 3; i++) {
      setShowedMovies(prevShowedMovies => {
        return [...prevShowedMovies, allMovies[i]];
      })
    }
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

      <AllMoviesCardList movies={showedMovies} />

      {showedMovies.length !== 0 ? <MoreMovies onMoreMovies={handleMoreMovies} /> : null}
    </div>
  );
}

export default AllMovies;
