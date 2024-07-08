// Conteudo.jsx

import './Conteudo.css';
import { useState, useEffect } from 'react';
import Movie from '../Movie/Movie';
import Loading from '../Loading/Loading';
import FilmeDestaque from '../FilmeDestaque/FilmeDestaque';

export default function Conteudo(props) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.themoviedb.org/3/movie/${props.option}?api_key=d44527eb32ca046e372b474227cbd335`)
            .then(res => res.json())
            .then(res => {
                setMovies(res.results);
                setTimeout(() => {
                    setIsLoading(false);
                }, 800);
            });
    }, [props.option]);

    if (isLoading) {
        return <Loading />;
    }

    const filmedestaque = movies[0];
    const otherMovies = movies.slice(1); 
    return (
        <div className="content">
            <FilmeDestaque movie={filmedestaque} />

            <div className="movies-container">
                <div className="movies">
                    {otherMovies.map(movie => (
                        <Movie movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
