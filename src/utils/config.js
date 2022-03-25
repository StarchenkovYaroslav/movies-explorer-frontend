export const paths = {
  main: '',
  movies: 'movies',
  savedMovies: 'saved-movies',
  profile: 'profile',
  signUp: 'signup',
  signIn: 'signin'
}

export const moviesApiSettings = {
  baseUrl: 'https://api.nomoreparties.co',
  moviesEndpoint: 'beatfilm-movies',
}

export const mainApiSettings = {
  baseUrl: 'http://localhost:3001',
  //baseUrl: 'https://api.moviesexplorer.nomoredomains.work',
  usersEndpoint: 'users',
  userInfoEndpoint: 'me',
  moviesEndpoint: 'movies',
  signUpEndpoint: 'signup',
  signInEndpoint: 'signin',
  signOutEndpoint: 'signout',
  checkAuthEndpoint: 'checkAuth'
}

export const messages = {
  serverError: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  movieNotFound: 'Ничего не найдено',
  searchMovieFormErrorMessage: 'Нужно ввести ключевое слово',
  signInError: 'Что-то пошло не так...',
  signUpError: 'Что-то пошло не так...',
  profileEditErrorMessage: 'Что-то пошло не так...',
  profileEditSuccessMessage: 'Данные изменены'
}

export const userNameRegExp = /^[A-zА-яё\s\-]{2,30}$/;