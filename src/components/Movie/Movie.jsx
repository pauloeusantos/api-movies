import './Movie.css'

export default function Movie(movie) {
    movie = movie.movie

    return (
        <>
            <div className="movie">
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
                <h1>{movie.title}</h1>
            </div>
        </>
    );
}