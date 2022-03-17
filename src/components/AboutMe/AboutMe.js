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
          <h3 className="student__name">Виталий</h3>
          <p className="student__status">Фронтенд-разработчик, 30&nbsp;лет</p>
          <p className="student__description">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
        </div>
        <ul className="student__info-links-list">
          <li className="student__info-links-item">
            <a href="http://fasebook.ru/" className="student__info-link" target="_blank">Facebook</a>
          </li>
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