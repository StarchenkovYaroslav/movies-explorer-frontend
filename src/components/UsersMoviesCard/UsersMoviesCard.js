import "./UsersMoviesCard.css";

import MoviesCard from "../MoviesCard/MoviesCard";

function UsersMoviesCard(props) {
  return (
    <MoviesCard {...props}>
      <button className="movies-card__delete-button" type="button" />
    </MoviesCard>
  )
}

export default UsersMoviesCard;
