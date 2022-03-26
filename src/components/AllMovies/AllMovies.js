import "./AllMovies.css";

import {useEffect, useState, useRef} from "react";

import moviesApi from "../../utils/Api/MoviesApi";
import findMovies from "../../utils/functions/find-movies";
import filterShortMovies from "../../utils/functions/filter-short-movies";
import {messages} from "../../utils/config";
import {useFormWithValidation} from "../../utils/hooks/use-form-with-validation";

import Search from "../Search/Search";
import AllMoviesCardList from "../AllMoviesCardList/AllMoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";

function AllMovies() {
  const isInitialMount = useRef(true);

  const [movieToSearch, setMovieToSearch] = useState('');
  const [areShortMoviesChosen, setAreShortMoviesChosen] = useState(false);

  const [allMovies, setAllMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [moviesToRender, setMoviesToRender] = useState([]);

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
    handleInputChange,
  } = useFormWithValidation(
    {movie: ''},
    {movie: false},
    {movie: ''},
    false
  );

  const isMoreMoviesVisible =
    moviesToRender.length !== 0
    && moviesToRender.length !== filteredMovies.length
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
    if (localStorage.getItem('foundMovies') && localStorage.getItem('keyWord') && localStorage.getItem('areShortMoviesChosen')) {
      setFoundMovies(JSON.parse(localStorage.getItem('foundMovies')));

      setInputValues(prevInputValues => {
        return {...prevInputValues, movie: localStorage.getItem('keyWord')};
      })

      setAreShortMoviesChosen(JSON.parse(localStorage.getItem('areShortMoviesChosen')));
    }
  }, []);

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
    if (areShortMoviesChosen) {
      setFilteredMovies(filterShortMovies(foundMovies));
    } else {
      setFilteredMovies(foundMovies);
    }

    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    localStorage.setItem('areShortMoviesChosen', JSON.stringify(areShortMoviesChosen));
  }, [foundMovies, areShortMoviesChosen]);

  useEffect(() => {
    if (allMovies.length !== 0) {
      setFoundMovies(findMovies(allMovies, movieToSearch));

      localStorage.setItem('keyWord', movieToSearch);
    }
  }, [movieToSearch]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (filteredMovies.length === 0) {
        setMoviesToRender([]);

        showLoadingMessage(messages.movieNotFound);
      } else {
        setMoviesToRender(filteredMovies.slice(0, initialMoviesAmount));

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

    if (allMovies.length === 0) {
      moviesApi.getAllMovies()
        .then(loadedMovies => {
          setAllMovies(loadedMovies);

          setMovieToSearch(inputValues.movie);
        })
        .catch(() => {
          showLoadingMessage(messages.serverError);
        })
        .finally(() => {
          setAreMoviesLoading(false);
        });
    } else {
      setMovieToSearch(inputValues.movie);

      setAreMoviesLoading(false);
    }
  }

  function handleMoreMovies() {
    if (Math.abs(moviesToRender.length - filteredMovies.length) >= addedMoviesAmount) {
      for (let i = moviesToRender.length; i < moviesToRender.length + addedMoviesAmount; i++) {
        setMoviesToRender(prevShowedMovies => {
          return [...prevShowedMovies, filteredMovies[i]];
        })
      }
    } else {
      for (let i = moviesToRender.length; i < filteredMovies.length; i++) {
        setMoviesToRender(prevShowedMovies => {
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
        movies={moviesToRender}
        areMoviesLoading={areMoviesLoading}
        isLoadingMessageVisible={isLoadingMessageVisible}
        loadingMessage={loadingMessage}
      />

      {isMoreMoviesVisible  ? <MoreMovies onMoreMovies={handleMoreMovies} /> : null}
    </div>
  );
}

export default AllMovies;
