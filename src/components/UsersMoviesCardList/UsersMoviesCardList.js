import "./UsersMoviesCardList.css";
import UsersMoviesCard from "../UsersMoviesCard/UsersMoviesCard";

function UsersMoviesCardList() {
  return (
    <section className="users-movies-card-list">
      <UsersMoviesCard
        name="Lake house"
        duration="12"
        image="https://picfiles.alphacoders.com/137/thumb-1920-137919.jpg"
      />
      <UsersMoviesCard
        name="Lake house"
        duration="12"
        image="https://picfiles.alphacoders.com/137/thumb-1920-137919.jpg"
      />
      <UsersMoviesCard
        name="Lake house"
        duration="12"
        image="https://picfiles.alphacoders.com/137/thumb-1920-137919.jpg"
      />
      <UsersMoviesCard
        name="Lake house"
        duration="12"
        image="https://picfiles.alphacoders.com/137/thumb-1920-137919.jpg"
      />
    </section>
  )
}

export default UsersMoviesCardList;
