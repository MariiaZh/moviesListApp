let answerFilm = "",
    answerRating = "";


const numberOfFilms = + prompt("Сколько фильмов Вы уже посомтрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    answerFilm = prompt("Один из последних просмотренных фильмов", "");
    answerRating = prompt("На сколько баллов от 1 до 10 вы его оцениваете?", "");

    if (answerRating != null && answerRating.length < 10 && answerRating != "" && answerFilm != null && answerFilm.length < 10 && answerFilm != "") {
        personalMovieDB.movies[answerFilm] = answerRating;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
};

if (personalMovieDB.count < 10) {
    console.log("Просомтрено довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы - классический зритель!");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы - киноман!");
} else {
    console.log("Произошла ошибка!");
};

