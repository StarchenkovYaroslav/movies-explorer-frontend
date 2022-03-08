import "./Techs.css";

import SectionTitle from "../SectionTitle/SectionTitle";

function Techs() {
  return (
    <section className="techniques">
      <div className="techniques__title">
        <SectionTitle title="Технологии"/>
      </div>
      <div className="techniques__description">
        <h3 className="techniques__description-title">7&nbsp;технологий</h3>
        <p className="techniques__description-text">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
      </div>
      <ul className="techniques__list">
        <li className="techniques__list-item">
          <a href="https://www.w3.org/html/" className="techniques__link">HTML</a>
        </li>
        <li className="techniques__list-item">
          <a href="" className="techniques__link">CSS</a>
        </li>
        <li className="techniques__list-item">
          <a href="https://www.w3.org/Style/CSS/" className="techniques__link">JS</a>
        </li>
        <li className="techniques__list-item">
          <a href="https://reactjs.org/" className="techniques__link">React</a>
        </li>
        <li className="techniques__list-item">
          <a href="https://git-scm.com/" className="techniques__link">Git</a>
        </li>
        <li className="techniques__list-item">
          <a href="https://expressjs.com/" className="techniques__link">Express.js</a>
        </li>
        <li className="techniques__list-item">
          <a href="https://www.mongodb.com/" className="techniques__link">mongoDB</a>
        </li>
      </ul>
    </section>
  );
}

export default Techs;