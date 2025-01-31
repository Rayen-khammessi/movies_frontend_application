
export function listgroupfunc(movies,genre){
    const wantedgenre=movies.filter(movie=>movie.genre.name === genre)
    return wantedgenre;
}