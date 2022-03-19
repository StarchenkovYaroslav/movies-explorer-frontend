import Api from "./Api";
import { moviesApiSettings } from "./config";

class MoviesApi extends Api {
  getAllMovies() {
    return fetch(this._baseUrl)
      .then(this._checkResponse);
  }
}

export default new MoviesApi(moviesApiSettings);
