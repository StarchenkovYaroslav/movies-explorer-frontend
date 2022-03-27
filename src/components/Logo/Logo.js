import "./Logo.css";

import {Link} from "react-router-dom";

import {paths} from "../../utils/config";

import headerLogo from "../../images/header__logo.svg";

function Logo() {
  return (
    <Link to={'/' + paths.main}>
      <img className="logo" src={headerLogo} alt="логотип" />
    </Link>
  )
}

export default Logo;
