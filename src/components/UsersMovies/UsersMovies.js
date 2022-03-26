import "./UsersMovies.css";

import {useEffect, useState} from "react";

import mainApi from "../../utils/Api/MainApi";

import Search from "../Search/Search";
import UsersMoviesCardList from "../UsersMoviesCardList/UsersMoviesCardList";

function UsersMovies() {
  const [usersMovies, setUsersMovies] = useState([]);

  useEffect(() => {
    mainApi.getAllMovies()
      .then((loadedMovies) => {
        setUsersMovies(loadedMovies);
      })
      .catch(() => {
        console.log('error');
      });
  }, [])

  function handleDeleteMovie(movieToDeleteId) {
    mainApi.deleteMovie(movieToDeleteId)
      .then(() => {
        setUsersMovies(prevUsersMovies => {
          return prevUsersMovies.filter(movie => movie._id !== movieToDeleteId);
        })
      })
      .catch(() => {
        console.log('error');
      })
  }

  return (
    <div className="users-movies">
      <Search
        searchedMovie={'searchedMovie'}
        isShortMoviesChosen={'isShortMoviesChosen'}

        onChooseShortMovies={'handleChooseShortMovies'}
        onInputSearchedMovie={'handleInputSearchedMovie'}
      />

      <UsersMoviesCardList
        movies={usersMovies}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default UsersMovies;
