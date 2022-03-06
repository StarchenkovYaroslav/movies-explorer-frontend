import "./Header.css";

import { Link } from "react-router-dom";

import { paths } from "../../utils/config";

import headerLogo from "../../images/header__logo.svg";

import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <Link to={paths.main}>
        <img className="header__logo" src={headerLogo} alt="логотип" />
      </Link>
      <Navigation />
    </header>
  )
}

export default Header;