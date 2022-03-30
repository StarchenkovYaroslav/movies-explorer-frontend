import "./AllMovies.css";

import {useEffect, useState, useRef} from "react";
import isURL from "validator/es/lib/isURL";

import moviesApi from "../../utils/Api/moviesApi";
import mainApi from "../../utils/Api/mainApi";
import {messages, moviesApiSettings, noInfoImageLink} from "../../utils/config";
import {useFormWithValidation} from "../../utils/hooks/use-form-with-validation";
import {useFindAndFilterMovies} from "../../utils/hooks/use-find-and-filter-movies";

import Search from "../Search/Search";
import AllMoviesCardList from "../AllMoviesCardList/AllMoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";

function AllMovies() {
  const isInitialMount = useRef(true);

  const [allMovies, setAllMovies] = useState([]);
  const [usersMovies, setUsersMovies] = useState([]);
  const [moviesToRender, setMoviesToRender] = useState([]);

  const [initialMoviesAmount, setInitialMoviesAmount] = useState(0);
  const [addedMoviesAmount, setAddedMoviesAmount] = useState(0);

  const [areMoviesLoading, setAreMoviesLoading] = useState(false);

  const {
    movieToFind,
    setMovieToFind,
    areShortMoviesChosen,
    setAreShortMoviesChosen,
    foundMovies,
    setFoundMovies,
    filteredMovies,
    formMessage,
    isFormMessageVisible,
    showFormMessage,
    hideFormMessage,
    loadingMessage,
    isLoadingMessageVisible,
    showLoadingMessage,
    hideLoadingMessage
  } = useFindAndFilterMovies(allMovies);

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
    mainApi.getUsersMovies()
      .then(loadedUsersMovies => {
        setUsersMovies(loadedUsersMovies);
      })
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (filteredMovies.length === 0 && movieToFind !== '') {
        setMoviesToRender([]);

        showLoadingMessage(messages.movieNotFound);
      } else {
        setMoviesToRender(filteredMovies.slice(0, initialMoviesAmount));

        hideLoadingMessage();
      }

      localStorage.setItem('keyWord', inputValues.movie);
      localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
      localStorage.setItem('areShortMoviesChosen', JSON.stringify(areShortMoviesChosen));
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

          setMovieToFind(inputValues.movie);
        })
        .catch(() => {
          showLoadingMessage(messages.serverError);
        })
        .finally(() => {
          setAreMoviesLoading(false);
        });
    } else {
      setMovieToFind(inputValues.movie);

      setAreMoviesLoading(false);
    }
  }

  function handleSaveMovie(data) {
    mainApi.addMovie({
      country: data.country ? data.country : 'No country',
      director: data.director ? data.director : 'No director',
      duration: data.duration ? data.duration : 0,
      year: data.year ? data.year : '0000',
      description: data.description ? data.description.slice(0, 1000) : 'No description',
      image: data.image.url ? moviesApiSettings.baseUrl + data.image.url : noInfoImageLink,
      trailerLink: data.trailerLink && isURL(data.trailerLink) ? data.trailerLink : noInfoImageLink,
      thumbnail: data.image.formats.thumbnail.url ? moviesApiSettings.baseUrl + data.image.formats.thumbnail.url : noInfoImageLink,
      movieId: data.id,
      nameRU: data.nameRU ? data.nameRU : 'No nameRU',
      nameEN: data.nameEN ? data.nameEN : 'No nameEN',
    })
      .then((savedMovie) => {
        setUsersMovies(prevUsersMovies => {
          return [...prevUsersMovies, savedMovie];
        });
      })
      .catch(err => {
        console.log(err.message)
      });
  }

  function handleDeleteMovie(movieToDeleteId) {
    mainApi.deleteMovie(movieToDeleteId)
      .then(() => {
        setUsersMovies(prevUsersMovies => {
          return prevUsersMovies.filter(movie => movie._id !== movieToDeleteId);
        })
      })
      .catch(err => {
        console.log(err.message);
      });
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

        areMoviesLoading={areMoviesLoading}

        onChooseShortMovies={handleChooseShortMovies}
        onInputSearchedMovie={handleInputChange}
        onSearch={handleSearchMovie}
      />

      <AllMoviesCardList
        movies={moviesToRender}
        usersMovies={usersMovies}

        areMoviesLoading={areMoviesLoading}
        isLoadingMessageVisible={isLoadingMessageVisible}
        loadingMessage={loadingMessage}

        onSaveMovie={handleSaveMovie}
        onDeleteMovie={handleDeleteMovie}
      />

      {isMoreMoviesVisible  ? <MoreMovies onMoreMovies={handleMoreMovies} /> : null}
    </div>
  );
}

export default AllMovies;
