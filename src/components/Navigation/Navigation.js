import "./Navigation.css";

import { paths } from "../../utils/config";

import { Link } from "react-router-dom";

function Navigation({ loggedIn, isVisible, onCloseSideNavigation }) {
  let navigationClassName = 'navigation';
  if (loggedIn) navigationClassName += ' navigation_logged-in';
  if (isVisible) navigationClassName += ' navigation_visible';

  let navigationContainerClassName = 'navigation__container';
  if (loggedIn) navigationContainerClassName += ' navigation__container_logged-in';

  function handleCloseSideMenu(evt) {
    if (evt.target.classList.contains('navigation_visible') || evt.target.classList.contains('navigation__link_logged-in')) {
      onCloseSideNavigation();
    }
  }

  const links =
    !loggedIn ? (
      <>
        <Link to={paths.signUp} className="navigation__link navigation__link_path_signup">Регистрация</Link>
        <Link to={paths.signIn} className="navigation__link navigation__link_path_signin">Войти</Link>
      </>
    ) : (
      <>
        <div className="navigation__links-list">
          <Link
            to={paths.main}
            className="navigation__link navigation__link_logged-in navigation__link_path_main"
          >
            Главная
          </Link>
          <Link
            to={paths.movies}
            className="navigation__link navigation__link_logged-in navigation__link_path_movies"
          >
            Фильмы
          </Link>
          <Link
            to={paths.savedMovies}
            className="navigation__link navigation__link_logged-in navigation__link_path_saved-movies"
          >
            Сохраненные фильмы
          </Link>
        </div>
        <Link
          to={paths.profile}
          className="navigation__link navigation__link_logged-in navigation__link_path_profile"
        >
          Аккаунт
        </Link>
      </>
    )

  return (
    <nav className={navigationClassName} onClick={handleCloseSideMenu}>
      <div className={navigationContainerClassName}>
        {links}
      </div>
    </nav>
  )
}

export default Navigation;