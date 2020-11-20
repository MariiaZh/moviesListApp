
const numberOfFilms = + prompt("Сколько фильмов Вы уже посомтрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const answerFilm = prompt("Один из последних просмотренных фильмов", ""),
    answerRating = prompt("На сколько баллов от 1 до 10 вы его оцениваете?", "");

answerFilm2 = prompt("Один из последних просмотренных фильмов", ""),
    answerRating2 = prompt("На сколько баллов от 1 до 10 вы его оцениваете?", "");

personalMovieDB.movies[answerFilm] = answerRating;
personalMovieDB.movies[answerFilm2] = answerRating2;


console.log(personalMovieDB.movies);