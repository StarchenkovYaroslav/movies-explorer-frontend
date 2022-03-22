import "./AllMovies.css";

import {useEffect, useState, useRef} from "react";

import moviesApi from "../../utils/Api/MoviesApi";
import filterMovies from "../../utils/functions/filter-movies";
import {messages} from "../../utils/config";
import {useFormWithValidation} from "../../utils/hooks/use-form-with-validation";

import Search from "../Search/Search";
import AllMoviesCardList from "../AllMoviesCardList/AllMoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";

function AllMovies() {
  const isInitialMount = useRef(true);

  const [areShortMoviesChosen, setAreShortMoviesChosen] = useState(false);

  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]);

  const [initialMoviesAmount, setInitialMoviesAmount] = useState(0);
  const [addedMoviesAmount, setAddedMoviesAmount] = useState(0);

  const [areMoviesLoading, setAreMoviesLoading] = useState(false);

  const [isLoadingMessageVisible, setIsLoadingMessageVisible] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const [formMessage, setFormMessage] = useState('');
  const [isFormMessageVisible, setIsFormMessageVisible] = useState(false);

  const {
    inputValues,
    setInputValues,
    inputsValidity,
    inputErrorMessages,
    isFormValid,
    handleInputChange,
    resetForm
  } = useFormWithValidation(
    {movie: ''},
    {movie: false},
    {movie: ''},
    false
  );

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

  function showFormMessage(message) {
    setFormMessage(message);
    setIsFormMessageVisible(true);
  }

  function hideFormMessage() {
    setFormMessage('');
    setIsFormMessageVisible(false);
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
    setFilteredMovies(filterMovies(allMovies, inputValues.movie, areShortMoviesChosen));
  }, [areShortMoviesChosen]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (allMovies.length === 0) {
        setFilteredMovies([]);
      } else {
        setFilteredMovies(filterMovies(allMovies, inputValues.movie, areShortMoviesChosen));
      }
    }
  }, [allMovies]);

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

  function handleSearchMovie(evt) {
    evt.preventDefault();

    if (!inputsValidity.movie) {
      showFormMessage(messages.searchMovieFormErrorMessage);

      return;
    } else {
      hideFormMessage();
    }

    hideLoadingMessage();

    setAreMoviesLoading(true);

    moviesApi.getAllMovies()
      .then(loadedMovies => {
        setAllMovies(loadedMovies);

        localStorage.setItem('allMovies', JSON.stringify(loadedMovies));
      })
      .catch(() => {
        setAllMovies([]);

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
        searchedMovie={inputValues.movie}
        isShortMoviesChosen={areShortMoviesChosen}

        formMessage={formMessage}
        isFormMessageVisible={isFormMessageVisible}

        onChooseShortMovies={handleChooseShortMovies}
        onInputSearchedMovie={handleInputChange}
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
