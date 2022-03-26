import "./AllMoviesCard.css";

import {moviesApiSettings} from "../../utils/config";

import MoviesCard from "../MoviesCard/MoviesCard";

function AllMoviesCard(props) {
  const buttonClassName = !props.isSaved ? 'movies-card__save-button'
    : 'movies-card__save-button movies-card__save-button_saved';

  const buttonText = !props.isSaved ? 'Сохранить' : '';

  function handleButtonClick() {
    if (props.isSaved) {
      props.onDelete(props.usersMovies.find(usersMovie => usersMovie.movieId === props.data.id)._id);
    } else {
      props.onSave(props.data);
    }
  }

  return (
    <MoviesCard
      name={props.data.nameRU}
      duration={props.data.duration}
      image={moviesApiSettings.baseUrl + props.data.image.url}
    >
      <button className={buttonClassName} type="button" onClick={handleButtonClick}>{buttonText}</button>
    </MoviesCard>
  )
}

export default AllMoviesCard;
