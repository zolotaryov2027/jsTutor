const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
}


function getMovies(numberFilms){
    for (let i = 0; i < numberFilms; i++){
        const a = prompt("Один из последних просмотренных фильмов", "");
        const b = prompt("На сколько оцените фильм?", "");

        if(a !== "" && b !== "" && a !== null && b !== null && a.length <= 50){
            personalMovieDB.movies[a] = b
        }else{
            i--
        }
    }
}

getMovies(numberOfFilms);


function checkCountFilms(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов")
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель")
    }else if(personalMovieDB.count >= 30){
        console.log("Вы киноман")
    }
}


console.log(personalMovieDB)