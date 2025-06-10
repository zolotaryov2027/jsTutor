const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
}


const a = prompt("Один из последних просмотренных фильмов", "");
const b = prompt("На сколько оцените фильм?", "");

const c = prompt("Один из последних просмотренных фильмов", "");
const d = prompt("На сколько оцените фильм?", "");


personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d


console.log(personalMovieDB)