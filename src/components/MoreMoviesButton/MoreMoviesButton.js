import "./MoreMoviesButton.css";

function MoreMoviesButton({ onClick }) {
  return (
    <button className="more-movies-button" type="button" onClick={onClick}>Ещё</button>
  )
}

export default MoreMoviesButton;
