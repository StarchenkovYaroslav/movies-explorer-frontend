import "./UsersMovies.css";

import Search from "../Search/Search";
import {useState} from "react";
import UsersMoviesCardList from "../UsersMoviesCardList/UsersMoviesCardList";

function UsersMovies() {
  const [isShortMoviesChosen, setIsShortMoviesChosen] = useState(false);
  const [searchedMovie, setSearchedMovie] = useState('');

  function handleChooseShortMovies(evt) {
    setIsShortMoviesChosen(evt.target.checked);
  }

  function handleInputSearchedMovie(evt) {
    setSearchedMovie(evt.target.value);
  }

  return (
    <div className="users-movies">
      <Search
        searchedMovie={searchedMovie}
        isShortMoviesChosen={isShortMoviesChosen}

        onChooseShortMovies={handleChooseShortMovies}
        onInputSearchedMovie={handleInputSearchedMovie}
      />

      <UsersMoviesCardList />
    </div>
  );
}

export default UsersMovies;
