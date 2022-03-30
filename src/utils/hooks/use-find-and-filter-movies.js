import {useEffect, useRef, useState} from "react";
import filterShortMovies from "../functions/filter-short-movies";
import findMovies from "../functions/find-movies";

export function useFindAndFilterMovies(initialMovies, mustShowAll = false) {
  const isInitialMount = useRef(true);

  const [movieToFind, setMovieToFind] = useState('');
  const [areShortMoviesChosen, setAreShortMoviesChosen] = useState(false);

  const [foundMovies, setFoundMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [isLoadingMessageVisible, setIsLoadingMessageVisible] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const [formMessage, setFormMessage] = useState('');
  const [isFormMessageVisible, setIsFormMessageVisible] = useState(false);

  function showLoadingMessage(message) {
    setIsLoadingMessageVisible(true);
    setLoadingMessage(message);
  }

  function hideLoadingMessage() {
    setIsLoadingMessageVisible(false);
    setLoadingMessage('');
  }

  function showFormMessage(message) {
    setFormMessage(message);
    setIsFormMessageVisible(true);
  }

  function hideFormMessage() {
    setFormMessage('');
    setIsFormMessageVisible(false);
  }

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
    hideLoadingMessage();

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
    setFilteredMovies,
    formMessage,
    isFormMessageVisible,
    showFormMessage,
    hideFormMessage,
    loadingMessage,
    isLoadingMessageVisible,
    showLoadingMessage,
    hideLoadingMessage
  }
}