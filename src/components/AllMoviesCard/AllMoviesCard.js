import "./AllMoviesCard.css";

import MoviesCard from "../MoviesCard/MoviesCard";

function AllMoviesCard(props) {
  const buttonClassName = !props.isSaved ? 'movies-card__save-button'
    : 'movies-card__save-button movies-card__save-button_saved';
  const buttonText = !props.isSaved ? 'Сохранить' : '';

  return (
    <MoviesCard {...props}>
      <button className={buttonClassName} type="button">{buttonText}</button>
    </MoviesCard>
  )
}

export default AllMoviesCard;
