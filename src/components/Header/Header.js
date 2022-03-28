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

  function handleModalLinkClick() {
    setIsMobileNavigationVisible(false);
  }

  return (
    <header className={headerClassName}>
      <Logo />
      <Navigation loggedIn={loggedIn} isVisible={isMobileNavigationVisible} onCloseSideNavigation={handleModalLinkClick} />
      {loggedIn && <Burger isActive={isMobileNavigationVisible} onClick={handleBurgerClick} />}
    </header>
  )
}

export default Header;