import "./Header.css";

import { Link } from "react-router-dom";

import { paths } from "../../utils/config";

import headerLogo from "../../images/header__logo.svg";

import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  const headerClassName = loggedIn ? 'header  header_logged-in' : 'header';

  return (
    <header className={headerClassName}>
      <Link to={paths.main}>
        <img className="header__logo" src={headerLogo} alt="логотип" />
      </Link>
      <Navigation loggedIn={loggedIn} />
    </header>
  )
}

export default Header;