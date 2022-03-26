import "./AllMoviesCardList.css";
import AllMoviesCard from "../AllMoviesCard/AllMoviesCard";
import Preloader from "../Preloader/Preloader";
import LoadingMessage from "../LoadingMessage/LoadingMessage";

function AllMoviesCardList(props) {
  const isPreloaderVisible = props.areMoviesLoading;
  const areMoviesVisible = !props.areMoviesLoading && props.movies.length !== 0;

  return (
    <section className="all-movies-card-list">

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

    </section>
  );
}

export default AllMoviesCardList;
