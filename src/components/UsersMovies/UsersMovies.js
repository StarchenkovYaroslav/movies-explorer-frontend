import "./UsersMovies.css";

import {useEffect, useState} from "react";

import mainApi from "../../utils/Api/MainApi";

import Search from "../Search/Search";
import UsersMoviesCardList from "../UsersMoviesCardList/UsersMoviesCardList";
import {useFindAndFilterMovies} from "../../utils/hooks/use-find-and-filter-movies";
import {useFormWithValidation} from "../../utils/hooks/use-form-with-validation";
import {messages} from "../../utils/config";

function UsersMovies() {
  const [usersMovies, setUsersMovies] = useState([]);

  const [areMoviesLoading, setAreMoviesLoading] = useState(false);

  const [isLoadingMessageVisible, setIsLoadingMessageVisible] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const [formMessage, setFormMessage] = useState('');
  const [isFormMessageVisible, setIsFormMessageVisible] = useState(false);

  const {
    setMovieToFind,
    areShortMoviesChosen,
    setAreShortMoviesChosen,
    filteredMovies,
  } = useFindAndFilterMovies(usersMovies, true);

  const {
    inputValues,
    inputsValidity,
    handleInputChange,
  } = useFormWithValidation(
    {movie: ''},
    {movie: false},
    {movie: ''},
    false
  );

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
    hideLoadingMessage();

    setAreMoviesLoading(true);

    mainApi.getAllMovies()
      .then((loadedMovies) => {
        setUsersMovies(loadedMovies);
      })
      .catch(() => {
        showLoadingMessage(messages.serverError);
      })
      .finally(() => {
        setAreMoviesLoading(false);
      });
  }, [])

  function handleSearchMovie(evt) {
    evt.preventDefault();

    if (!inputsValidity.movie) {
      showFormMessage(messages.searchMovieFormErrorMessage);

      return;
    } else {
      hideFormMessage();
    }

    hideLoadingMessage();

    setMovieToFind(inputValues.movie);
  }

  function handleDeleteMovie(movieToDeleteId) {
    mainApi.deleteMovie(movieToDeleteId)
      .then(() => {
        setUsersMovies(prevUsersMovies => {
          return prevUsersMovies.filter(movie => movie._id !== movieToDeleteId);
        })
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleChooseShortMovies(evt) {
    setAreShortMoviesChosen(evt.target.checked);
  }

  return (
    <div className="users-movies">
      <Search
        searchedMovie={inputValues.movie}
        isShortMoviesChosen={areShortMoviesChosen}

        formMessage={formMessage}
        isFormMessageVisible={isFormMessageVisible}

        onChooseShortMovies={handleChooseShortMovies}
        onInputSearchedMovie={handleInputChange}
        onSearch={handleSearchMovie}
      />

      <UsersMoviesCardList
        movies={filteredMovies}

        areMoviesLoading={areMoviesLoading}
        isLoadingMessageVisible={isLoadingMessageVisible}
        loadingMessage={loadingMessage}

        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default UsersMovies;
