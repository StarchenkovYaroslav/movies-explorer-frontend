import "./AllMoviesCardList.css";
import AllMoviesCard from "../AllMoviesCard/AllMoviesCard";
import {moviesApiSettings} from "../../utils/config";

function AllMoviesCardList({ movies }) {
  return (
    <section className="all-movies-card-list">

      {movies.length !== 0 && movies.map(movie => {
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

    </section>
  );
}

export default AllMoviesCardList;
