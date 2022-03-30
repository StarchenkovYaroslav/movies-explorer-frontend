import {maxShortMovieDuration} from "../config";

export default function filterShortMovies(initialMovies) {
  return initialMovies.filter(movie => movie.duration <= maxShortMovieDuration);
}
