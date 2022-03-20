import "./AllMoviesCardList.css";
import AllMoviesCard from "../AllMoviesCard/AllMoviesCard";
import {moviesApiSettings} from "../../utils/config";

function AllMoviesCardList({ movies }) {
  return (
    <section className="all-movies-card-list">

      <AllMoviesCard
        isSaved={true}
        name="Lake house"
        duration="12"
        image="https://picfiles.alphacoders.com/137/thumb-1920-137919.jpg"
      />
      <AllMoviesCard
        isSaved={false}
        name="Lake house"
        duration="12"
        image="https://picfiles.alphacoders.com/137/thumb-1920-137919.jpg"
      />
      <AllMoviesCard
        isSaved={true}
        name="Lake house"
        duration="12"
        image="https://picfiles.alphacoders.com/137/thumb-1920-137919.jpg"
      />
      <AllMoviesCard
        isSaved={false}
        name="Lake house"
        duration="12"
        image="https://picfiles.alphacoders.com/137/thumb-1920-137919.jpg"
      />

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
