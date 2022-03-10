import "./AllMoviesCardList.css";
import AllMoviesCard from "../AllMoviesCard/AllMoviesCard";

function AllMoviesCardList() {
  return (
    <section className="all-movies-card-list">
      <AllMoviesCard
        isSaved={false}
        name="Lake house"
        duration="12"
        image="https://picfiles.alphacoders.com/137/thumb-1920-137919.jpg"
      />
      <AllMoviesCard
        isSaved={true}
        name="Lake house"
        duration="123"
        image="https://picfiles.alphacoders.com/137/thumb-1920-137919.jpg"
      />
      <AllMoviesCard
        isSaved={false}
        name="Lake house"
        duration="123"
        image="https://picfiles.alphacoders.com/137/thumb-1920-137919.jpg"
      />
      <AllMoviesCard
        isSaved={true}
        name="Lake house"
        duration="123"
        image="https://picfiles.alphacoders.com/137/thumb-1920-137919.jpg"
      />
    </section>
  );
}

export default AllMoviesCardList;
