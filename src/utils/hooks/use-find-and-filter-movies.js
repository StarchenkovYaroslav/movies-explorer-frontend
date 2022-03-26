import {useEffect, useState} from "react";
import filterShortMovies from "../functions/filter-short-movies";
import findMovies from "../functions/find-movies";

export function useFindAndFilterMovies(initialMovies) {
  const [movieToFind, setMovieToFind] = useState('');
  const [areShortMoviesChosen, setAreShortMoviesChosen] = useState(false);

  const [foundMovies, setFoundMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (areShortMoviesChosen) {
      setFilteredMovies(filterShortMovies(foundMovies));
    } else {
      setFilteredMovies(foundMovies);
    }

    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    localStorage.setItem('areShortMoviesChosen', JSON.stringify(areShortMoviesChosen));
  }, [foundMovies, areShortMoviesChosen]);

  useEffect(() => {
    if (initialMovies.length !== 0) {
      setFoundMovies(findMovies(initialMovies, movieToFind));

      localStorage.setItem('keyWord', movieToFind);
    }
  }, [movieToFind]);

  return {
    movieToFind,
    setMovieToFind,
    areShortMoviesChosen,
    setAreShortMoviesChosen,
    foundMovies,
    setFoundMovies,
    filteredMovies,
    setFilteredMovies
  }
}