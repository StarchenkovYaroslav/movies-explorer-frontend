import "./MoviesCard.css";

function MoviesCard(props) {
  return (
    <article className="movie-card">
      <p className="movie-card__name">{props.name}</p>
      <p className="movie-card__duration">{props.duration} мин.</p>
      <a className="movie-card__link" href={props.trailerLink} target="_blank">
        <img className="movie-card__image" src={props.image} alt="обложка"/>
      </a>
      {props.children}
    </article>
  );
}

export default MoviesCard;
