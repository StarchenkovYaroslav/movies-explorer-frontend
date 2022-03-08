import "./Navigation.css";

import { paths } from "../../utils/config";

import { Link } from "react-router-dom";

function Navigation({ loggedIn }) {
  if (!loggedIn) {
    return (
      <nav className="navigation">
        <Link to={paths.signUp} className="navigation__link navigation__link_path_signup">Регистрация</Link>
        <Link to={paths.signIn} className="navigation__link navigation__link_path_signin">Войти</Link>
      </nav>
    )
  } else {
    return (
      <nav className="navigation">
        <Link to={paths.movies} className="navigation__link navigation__link_path_movies">Фильмы</Link>
        <Link to={paths.savedMovies} className="navigation__link navigation__link_path_saved-movies">Сохраненные фильмы</Link>
        <Link to={paths.profile} className="navigation__link navigation__link_path_profile">Аккаунт</Link>
      </nav>
    )
  }
}

export default Navigation;