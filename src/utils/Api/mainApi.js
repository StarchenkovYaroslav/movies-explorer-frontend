import Api from "./Api";
import {defaultErrorMessage, mainApiSettings} from "../config";

class MainApi extends Api {
  constructor(settings) {
    super(settings);

    this._signUpEndpoint = settings.signUpEndpoint;
    this._signInEndpoint = settings.signInEndpoint;
    this._signOutEndpoint = settings.signOutEndpoint;

    this._usersEndpoint = settings.usersEndpoint;
    this._userInfoEndpoint = settings.userInfoEndpoint;

    this._moviesEndpoint = settings.moviesEndpoint;


    this._checkAuthEndpoint = settings.checkAuthEndpoint;
  }

  signUp(data) {
    return fetch(`${this._baseUrl}/${this._signUpEndpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  signIn(data) {
    return fetch(`${this._baseUrl}/${this._signInEndpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  signOut() {
    return fetch(`${this._baseUrl}/${this._signOutEndpoint}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(this._checkResponse);
  }

  checkAuth() {
    return fetch(`${this._baseUrl}/${this._checkAuthEndpoint}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(this._checkResponse);
  }

  getCurrentUser() {
    return fetch(`${this._baseUrl}/${this._usersEndpoint}/${this._userInfoEndpoint}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(this._checkResponse);
  }

  editCurrentUser(userData) {
    return fetch(`${this._baseUrl}/${this._usersEndpoint}/${this._userInfoEndpoint}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(userData)
    })
      .then(this._checkResponse);
  }

  getUsersMovies() {
    return fetch(`${this._baseUrl}/${this._moviesEndpoint}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(this._checkResponse);
  }

  addMovie(cardData) {
    return fetch(`${this._baseUrl}/${this._moviesEndpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(cardData)
    })
      .then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/${this._moviesEndpoint}/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(this._checkResponse);
  }
}

export default new MainApi(mainApiSettings, defaultErrorMessage);
