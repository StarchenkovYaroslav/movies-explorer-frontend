import "./Header.css";

import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header({ loggedIn }) {
  const headerClassName = loggedIn ? 'header  header_logged-in' : 'header';

  return (
    <header className={headerClassName}>
      <Logo />
      <Navigation loggedIn={loggedIn} />
    </header>
  )
}

export default Header;