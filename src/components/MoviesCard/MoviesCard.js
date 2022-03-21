import "./MoviesCard.css";

function MoviesCard(props) {
  return (
    <article className="movie-card">
      <p className="movie-card__name">{props.name}</p>
      <p className="movie-card__duration">{props.duration} мин.</p>
      <img className="movie-card__image" src={props.image} alt="обложка"/>
      {props.children}
    </article>
  );
}

export default MoviesCard;
