import "./Navigation.css";

import { paths } from "../../utils/config";

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to={paths.signUp} className="navigation__link navigation__link_path_signup">Регистрация</Link>
      <Link to={paths.signIn} className="navigation__link navigation__link_path_signin">Войти</Link>
    </nav>
  )
}

export default Navigation;