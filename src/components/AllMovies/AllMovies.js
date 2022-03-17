import "./AllMovies.css";

import {useState} from "react";

import Search from "../Search/Search";
import AllMoviesCardList from "../AllMoviesCardList/AllMoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";

function AllMovies() {
  const [isShortMoviesChosen, setIsShortMoviesChosen] = useState(false);
  const [searchedMovie, setSearchedMovie] = useState('');

  function handleChooseShortMovies(evt) {
    setIsShortMoviesChosen(evt.target.checked);
  }

  function handleInputSearchedMovie(evt) {
    setSearchedMovie(evt.target.value);
  }

  return (
    <div className="all-movies">
      <Search
        searchedMovie={searchedMovie}
        isShortMoviesChosen={isShortMoviesChosen}

        onChooseShortMovies={handleChooseShortMovies}
        onInputSearchedMovie={handleInputSearchedMovie}
      />

      <AllMoviesCardList />

      <MoreMovies />
    </div>
  );
}

export default AllMovies;
