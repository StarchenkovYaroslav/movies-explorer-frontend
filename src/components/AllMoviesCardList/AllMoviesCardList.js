import "./AllMoviesCardList.css";
import AllMoviesCard from "../AllMoviesCard/AllMoviesCard";
import {moviesApiSettings} from "../../utils/config";
import Preloader from "../Preloader/Preloader";

function AllMoviesCardList({ movies, areMoviesLoading }) {
  const isPreloaderVisible = areMoviesLoading;
  const areCardsVisible = !areMoviesLoading && movies.length !== 0;

  return (
    <section className="all-movies-card-list">

      {areCardsVisible && movies.map(movie => {
        return (
          <AllMoviesCard
            key={movie.id}
            isSaved={false}
            name={movie.nameRU}
            duration={movie.duration}
            image={moviesApiSettings.baseUrl + '/' + movie.image.url}
          />
        )
      })}

      {isPreloaderVisible ? <Preloader /> : null}

    </section>
  );
}

export default AllMoviesCardList;
