import "./MoreMovies.css";

import MoreMoviesButton from "../MoreMoviesButton/MoreMoviesButton";

function MoreMovies({ onMoreMovies }) {
  return (
    <section className="more-movies">
      <MoreMoviesButton onClick={onMoreMovies} />
    </section>
  )
}

export default MoreMovies;
