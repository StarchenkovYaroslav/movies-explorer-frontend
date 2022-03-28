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
  profileEditSuccessMessage: 'Данные изменены',
  emailInputError: 'Введите корректный email.',
  nameInputError: 'От 2 до 30 символов. Только буквы, пробел и дефис.',
  passwordInputError: 'От 2 до 30 символов'
}

export const userNameRegExp = /^[A-zА-яё\s\-]{2,30}$/;

export const userPasswordRegExp = /^.{2,30}$/;

export const noInfoImageLink = 'https://st3.depositphotos.com/1269954/12628/v/950/depositphotos_126285396-stock-illustration-no-information-rubber-stamp.jpg';

