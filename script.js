let numberOfFilms;


function getFilmsNumber(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while(numberOfFilms == '' || numberOfFilms === null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

getFilmsNumber();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
}



function rememberMyFilms(countFilms, movies){
    for (let i = 0; i < countFilms; i++){
        const a = prompt("Один из последних просмотренных фильмов", "");
        const b = prompt("На сколько оцените фильм?", "");

        if(a !== "" && b !== "" && a !== null && b !== null && a.length <= 50){
            movies[a] = b
        }else{
            i--
        }
    }
}


rememberMyFilms(personalMovieDB.count, personalMovieDB.movies);


function checkCountFilms(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов")
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель")
    }else if(personalMovieDB.count >= 30){
        console.log("Вы киноман")
    }
}

checkCountFilms();

function showMyDb(hidden){
    if(!hidden){
        console.log(personalMovieDB)
    }
}


showMyDb(personalMovieDB.privat)


function writeYourGenres(filmsGeneresDB){
    for(let i = 1; i <= 3; i++){
        filmsGeneresDB[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
    }
}


writeYourGenres(personalMovieDB.generes);