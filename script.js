const numberOfFilms = +prompt('Скількі Фільмі ви вже подивились?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх фільмів які ви дивились?', ''),
        b = prompt('На скільки ви його оцінете', ''),
        c = prompt('Один з останніх фільмів які ви дивились?', ''),
        d = prompt('На скільки ви його оцінете', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);