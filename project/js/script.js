/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
if (numberOfFilms < 10) {
     console.log("Просмотрено довольно мало фильмов");
} else if (numberOfFilms <= 30) {
    console.log("Вы классический зритель");
} else if (numberOfFilms > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
    
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < numberOfFilms; i++) {
    let  a = prompt('Один из последних просмотренных фильмов?', '');
    while (a == null || a == '' || a.length > 50) {
        console.log("Error");
        a = prompt('Один из последних просмотренных фильмов?', '');
    }
    
    let  b = prompt('На сколько вы оцените его?', '');
    while (b < 1 || b > 10) {
        console.log("Error");
        b = prompt('На сколько вы оцените его?');
    }
    
    personalMovieDB.movies[a] = b;
}





console.log(personalMovieDB);