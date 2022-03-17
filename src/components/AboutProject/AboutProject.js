import "./AboutProject.css";

import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__title">
        <SectionTitle title="О проекте" />
      </div>
      <ul className="about-project__points-list">
        <li className="about-project__points-item">
          <h3 className="about-project__point-title">Дипломный проект включал 5&nbsp;этапов</h3>
          <p className="about-project__point-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        </li>
        <li className="about-project__points-item">
          <h3 className="about-project__point-title">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
          <p className="about-project__point-description">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__time-line">
        <p className="about-project__stage-time about-project__stage-time_stage_backend">1 неделя</p>
        <p className="about-project__stage-time about-project__stage-time_stage_frontend">4 недели</p>
        <p className="about-project__stage-title about-project__stage-title_stage_backend">Back-end</p>
        <p className="about-project__stage-title about-project__stage-title_stage_frontend">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;