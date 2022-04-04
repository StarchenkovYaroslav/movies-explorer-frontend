import "./UsersMoviesCard.css";

import MoviesCard from "../MoviesCard/MoviesCard";

function UsersMoviesCard(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <MoviesCard {...props}>
      <button className="movies-card__delete-button" type="button" onClick={handleDelete} />
    </MoviesCard>
  )
}

export default UsersMoviesCard;
