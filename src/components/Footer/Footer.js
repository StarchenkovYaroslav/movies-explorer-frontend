import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <p className="footer__year">&copy; {currentYear}</p>
      <nav className="footer__navigation">
        <a href="https://practicum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
        <a href="https://github.com/" className="footer__link">Github</a>
        <a href="https://facebook.com/" className="footer__link">Facebook</a>
      </nav>
    </footer>
  );
}

export default Footer;