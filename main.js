let answerFilm = "",
    answerRating = "",
    answerGenre = "";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посомтрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посомтрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function rememberMyFilms() {
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

}

rememberMyFilms();

// исполльзование циклов while и do while
//let i = 0;
//while (i < 2) {
//    answerFilm = prompt("Один из последних просмотренных фильмов", "");
//    answerRating = prompt("На сколько баллов от 1 до 10 вы его оцениваете?", "");

//    if (answerRating != null && answerRating.length < 10 && answerRating != "" && answerFilm != null && answerFilm.length < 10 && answerFilm != "") {
//        personalMovieDB.movies[answerFilm] = answerRating;
//        console.log("done");
//    } else {
//        console.log("error");
//        i--;
//    }
//    console.log("while" + i);
//    i++;
//}

//do {
//    answerFilm = prompt("Один из последних просмотренных фильмов", "");
//    answerRating = prompt("На сколько баллов от 1 до 10 вы его оцениваете?", "");

//    if (answerRating != null && answerRating.length < 10 && answerRating != "" && answerFilm != null && answerFilm.length < 10 && answerFilm != "") {
//        personalMovieDB.movies[answerFilm] = answerRating;
//        console.log("done");
//    } else {
//        console.log("error");
//        i--;
//    }
//    console.log("Do/while" + i);
//    i++;
//} while (i < 2);

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просомтрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы - классический зритель!");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы - киноман!");
    } else {
        console.log("Произошла ошибка!");
    };
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        answerGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(answerGenre);
        //personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }

}

writeYourGenres()
console.log(personalMovieDB.genres);
//console.log(personalMovieDB);

