import "./AllMovies.css";

import {useEffect, useState, useRef} from "react";

import moviesApi from "../../utils/Api/MoviesApi";
import filterMovies from "../../utils/functions/filter-movies";
import {messages} from "../../utils/config";

import Search from "../Search/Search";
import AllMoviesCardList from "../AllMoviesCardList/AllMoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";

function AllMovies() {
  const isInitialMount = useRef(true);

  const [areShortMoviesChosen, setAreShortMoviesChosen] = useState(false);
  const [searchedMovie, setSearchedMovie] = useState('');

  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]);

  const [initialMoviesAmount, setInitialMoviesAmount] = useState(0);
  const [addedMoviesAmount, setAddedMoviesAmount] = useState(0);

  const [areMoviesLoading, setAreMoviesLoading] = useState(false);

  const [isLoadingMessageVisible, setIsLoadingMessageVisible] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const isMoreMoviesVisible =
    showedMovies.length !== 0
    && showedMovies.length !== filteredMovies.length
    && !areMoviesLoading;

  function showLoadingMessage(message) {
    setIsLoadingMessageVisible(true);
    setLoadingMessage(message);
  }

  function hideLoadingMessage() {
    setIsLoadingMessageVisible(false);
    setLoadingMessage('');
  }

  function checkPageWidth() {
    const pageWidth = document.documentElement.clientWidth;

    if (pageWidth > 1007) {
      setInitialMoviesAmount(12);
      setAddedMoviesAmount(3);
    } else if(pageWidth > 635) {
      setInitialMoviesAmount(8);
      setAddedMoviesAmount(2);
    } else {
      setInitialMoviesAmount(5);
      setAddedMoviesAmount(2);
    }
  }

  useEffect(() => {
    checkPageWidth()
  }, [])

  useEffect(() => {
    function postponeCheckPageWidth() {
      setTimeout(checkPageWidth, 2000);
    }

    window.addEventListener('resize', postponeCheckPageWidth);

    return () => {
      window.removeEventListener('resize', postponeCheckPageWidth);
    }
  }, [])

  useEffect(() => {
    setFilteredMovies(filterMovies(allMovies, searchedMovie, areShortMoviesChosen));
  }, [areShortMoviesChosen]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (filteredMovies.length === 0) {
        setShowedMovies([]);

        showLoadingMessage(messages.movieNotFound);
      } else {
        setShowedMovies(filteredMovies.slice(0, initialMoviesAmount));

        hideLoadingMessage();
      }
    }
  }, [filteredMovies])

  function handleChooseShortMovies(evt) {
    setAreShortMoviesChosen(evt.target.checked);
  }

  function handleInputSearchedMovie(evt) {
    setSearchedMovie(evt.target.value);
  }

  function handleSearchMovie(evt) {
    evt.preventDefault();

    hideLoadingMessage();

    setAreMoviesLoading(true);

    moviesApi.getAllMovies()
      .then(loadedMovies => {
        setAllMovies(loadedMovies);

        setFilteredMovies(filterMovies(loadedMovies, searchedMovie, areShortMoviesChosen));

        localStorage.setItem('allMovies', JSON.stringify(loadedMovies));
      })
      .catch(() => {
        setAllMovies([]);
        setFilteredMovies([]);

        showLoadingMessage(messages.serverError);
      })
      .finally(() => {
        setAreMoviesLoading(false);
      });
  }

  function handleMoreMovies() {
    if (Math.abs(showedMovies.length - filteredMovies.length) >= addedMoviesAmount) {
      for (let i = showedMovies.length; i < showedMovies.length + addedMoviesAmount; i++) {
        setShowedMovies(prevShowedMovies => {
          return [...prevShowedMovies, filteredMovies[i]];
        })
      }
    } else {
      for (let i = showedMovies.length; i < filteredMovies.length; i++) {
        setShowedMovies(prevShowedMovies => {
          return [...prevShowedMovies, filteredMovies[i]];
        })
      }
    }
  }

  return (
    <div className="all-movies">
      <Search
        searchedMovie={searchedMovie}
        isShortMoviesChosen={areShortMoviesChosen}

        onChooseShortMovies={handleChooseShortMovies}
        onInputSearchedMovie={handleInputSearchedMovie}
        onSearch={handleSearchMovie}
      />

      <AllMoviesCardList
        movies={showedMovies}
        areMoviesLoading={areMoviesLoading}
        isLoadingMessageVisible={isLoadingMessageVisible}
        loadingMessage={loadingMessage}
      />

      {isMoreMoviesVisible  ? <MoreMovies onMoreMovies={handleMoreMovies} /> : null}
    </div>
  );
}

export default AllMovies;
