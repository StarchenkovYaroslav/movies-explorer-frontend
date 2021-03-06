import "./UsersMovies.css";

import {useEffect, useState} from "react";

import mainApi from "../../utils/Api/mainApi";

import Search from "../Search/Search";
import UsersMoviesCardList from "../UsersMoviesCardList/UsersMoviesCardList";
import {useFindAndFilterMovies} from "../../utils/hooks/use-find-and-filter-movies";
import {useFormWithValidation} from "../../utils/hooks/use-form-with-validation";
import {messages} from "../../utils/config";

function UsersMovies() {
  const [usersMovies, setUsersMovies] = useState([]);
  const [wereMoviesLoaded, setWereMoviesLoaded] = useState(false);

  const [areMoviesLoading, setAreMoviesLoading] = useState(false);

  const {
    setMovieToFind,
    areShortMoviesChosen,
    handleChooseShortMovies,
    filteredMovies,
    formMessage,
    isFormMessageVisible,
    showFormMessage,
    hideFormMessage,
    loadingMessage,
    isLoadingMessageVisible,
    showLoadingMessage,
    hideLoadingMessage
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

  useEffect(() => {
    hideLoadingMessage();

    setAreMoviesLoading(true);

    mainApi.getUsersMovies()
      .then((loadedMovies) => {
        setUsersMovies(loadedMovies);
        setWereMoviesLoaded(true);
      })
      .catch(() => {
        showLoadingMessage(messages.serverError);
      })
      .finally(() => {
        setAreMoviesLoading(false);
      });
  }, [])

  useEffect(() => {
    if (filteredMovies.length === 0 && usersMovies.length !== 0) {
      showLoadingMessage(messages.movieNotFound);
    } else if (filteredMovies.length === 0 && usersMovies.length === 0 && wereMoviesLoaded) {
      showLoadingMessage(messages.noUsersMovies);
    } else if (filteredMovies.length !== 0) {
      hideLoadingMessage();
    }
  }, [filteredMovies]);

  function handleSearchMovie(evt) {
    evt.preventDefault();

    if (!inputsValidity.movie) {
      showFormMessage(messages.searchMovieFormErrorMessage);

      return;
    } else {
      hideFormMessage();
    }

    if (usersMovies.length !== 0) {
      setMovieToFind(inputValues.movie);
    }
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

  return (
    <div className="users-movies">
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
