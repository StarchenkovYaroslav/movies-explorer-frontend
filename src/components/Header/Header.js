import "./Header.css";

import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import {useState} from "react";

function Header({ loggedIn }) {
  const headerClassName = loggedIn ? 'header  header_logged-in' : 'header';

  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isMobileNavigationVisible, setIsMobileNavigationVisible] = useState(false);

  function handleBurgerClick() {
    setIsMobileNavigationVisible(!isMobileNavigationVisible);
    setIsBurgerActive(!isBurgerActive);
  }

  return (
    <header className={headerClassName}>
      <Logo />
      <Navigation loggedIn={loggedIn} isVisible={isMobileNavigationVisible} />
      {loggedIn && <Burger isActive={isMobileNavigationVisible} onClick={handleBurgerClick} />}
    </header>
  )
}

export default Header;