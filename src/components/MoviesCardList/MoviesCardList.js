import "./MoviesCardList.css";

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      {props.children}
    </section>
  )
}

export default MoviesCardList;
