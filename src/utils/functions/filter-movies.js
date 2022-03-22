export default function filterMovies(initialMovies, keyWord, areShort) {
  return initialMovies.filter(movie => {
    let isMatchedKeyWord = false;

    if (movie.nameRU && movie) {
      isMatchedKeyWord = (movie.nameRU + movie.nameEN).toLowerCase().includes(keyWord.toLowerCase());
    } else if (movie.nameEN) {
      isMatchedKeyWord = movie.nameEN.toLowerCase().includes(keyWord.toLowerCase());
    } else if (movie.nameRU) {
      isMatchedKeyWord = movie.nameRU.toLowerCase().includes(keyWord.toLowerCase());
    }


    if (areShort) {
      return isMatchedKeyWord && movie.duration < 41;
    }

    return  isMatchedKeyWord;
  });
}
