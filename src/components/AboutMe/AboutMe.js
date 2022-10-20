import "./AboutMe.css";

import studentPhoto from "../../images/student__photo.jpg"

import SectionTitle from "../SectionTitle/SectionTitle";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="student" id="student">
      <div className="student__title">
        <SectionTitle title="Студент"/>
      </div>
      <div className="student__info">
        <div className="student__info-text">
          <h3 className="student__name">Ярослав</h3>
          <p className="student__status">Начинающий фронтенд-разработчик, 26&nbsp;лет</p>
          <p className="student__description">Экономическое образование.&nbsp;3&nbsp;года работы репетитором по&nbsp;математике.</p>
          <p className="student__description">Прошел курс в&nbsp;ЯндексПрактикуме, получил практику работы над реальной разработки в&nbsp;рамках участия в&nbsp;проекте &laquo;Можно спросить&raquo; от&nbsp;фонда &laquo;Не&nbsp;напрасно&raquo;.</p>
          <p className="student__description">Параллельно с&nbsp;программированием изучаю английский. Преподаватель говорит, что я&nbsp;advanced, but i&rsquo;m not sure because of&nbsp;my&nbsp;not having tested it&nbsp;ever.</p>
        </div>
        <ul className="student__info-links-list">
          <li className="student__info-links-item">
            <a href="https://github.com/StarchenkovYaroslav" className="student__info-link" target="_blank">Github</a>
          </li>
        </ul>
        <img className="student__photo" src={studentPhoto} alt="Фото студента" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
