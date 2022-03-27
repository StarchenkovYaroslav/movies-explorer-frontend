import {useEffect, useRef, useState} from "react";
import filterShortMovies from "../functions/filter-short-movies";
import findMovies from "../functions/find-movies";

export function useFindAndFilterMovies(initialMovies, mustShowAll) {
  const isInitialMount = useRef(true);

  const [movieToFind, setMovieToFind] = useState('');
  const [areShortMoviesChosen, setAreShortMoviesChosen] = useState(false);

  const [foundMovies, setFoundMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (mustShowAll) {
      setFoundMovies(initialMovies);
    }
  }, [initialMovies])

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (areShortMoviesChosen) {
        setFilteredMovies(filterShortMovies(foundMovies));
      } else {
        setFilteredMovies(foundMovies);
      }
    }
  }, [foundMovies, areShortMoviesChosen]);

  useEffect(() => {
    if (initialMovies.length !== 0) {
      setFoundMovies(findMovies(initialMovies, movieToFind));
    } else {
      setFoundMovies([]);
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