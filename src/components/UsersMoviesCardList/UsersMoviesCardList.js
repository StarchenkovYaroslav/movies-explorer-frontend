import UsersMoviesCard from "../UsersMoviesCard/UsersMoviesCard";
import Preloader from "../Preloader/Preloader";
import LoadingMessage from "../LoadingMessage/LoadingMessage";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function UsersMoviesCardList(props) {
  const isPreloaderVisible = props.areMoviesLoading;
  const areMoviesVisible = !props.areMoviesLoading && props.movies.length !== 0;

  return (
    <MoviesCardList>

      {areMoviesVisible && props.movies.map(movie => {
        return (
          <UsersMoviesCard
            key={movie._id}

            id={movie._id}
            name={movie.nameRU}
            duration={movie.duration}
            image={movie.image}
            trailerLink={movie.trailerLink}

            onDelete={props.onDeleteMovie}
          />
        )
      })}

      {isPreloaderVisible ? <Preloader /> : null}

      {props.isLoadingMessageVisible ? <LoadingMessage message={props.loadingMessage} /> : null}

    </MoviesCardList>
  )
}

export default UsersMoviesCardList;
