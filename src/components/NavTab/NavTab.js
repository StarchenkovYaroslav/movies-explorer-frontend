import "./NavTab.css";

function NavTab() {
  return (
    <section className="project-navigation">
      <nav>
        <ul className="project-navigation__links-list">
          <li className="project-navigation__links-item">
            <a href="#about-project" className="project-navigation__link">О проекте</a>
          </li>
          <li className="project-navigation__links-item">
            <a href="#techniques" className="project-navigation__link">Технологии</a>
          </li>
          <li className="project-navigation__links-item">
            <a href="#student" className="project-navigation__link">Студент</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;