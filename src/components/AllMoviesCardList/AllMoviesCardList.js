import AllMoviesCard from "../AllMoviesCard/AllMoviesCard";
import Preloader from "../Preloader/Preloader";
import LoadingMessage from "../LoadingMessage/LoadingMessage";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function AllMoviesCardList(props) {
  const isPreloaderVisible = props.areMoviesLoading;
  const areMoviesVisible = !props.areMoviesLoading && props.movies.length !== 0;

  return (
    <MoviesCardList>

      {areMoviesVisible && props.movies.map(movie => {
        const isSaved = props.usersMovies.some(usersMovie => usersMovie.movieId === movie.id);

        return (
          <AllMoviesCard
            key={movie.id}
            isSaved={isSaved}
            data={movie}
            usersMovies={props.usersMovies}

            onSave={props.onSaveMovie}
            onDelete={props.onDeleteMovie}
          />
        )
      })}

      {isPreloaderVisible ? <Preloader /> : null}

      {props.isLoadingMessageVisible ? <LoadingMessage message={props.loadingMessage} /> : null}

    </MoviesCardList>
  );
}

export default AllMoviesCardList;
