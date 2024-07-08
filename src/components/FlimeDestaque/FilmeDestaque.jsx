

import React from 'react';
import './FilmeDestaque.css'

const FilmeDestaque = ({ movie }) => {
    return (
        <div className="filmedestaque">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="poster" />
            <div className="overlay">
                <h2 className="title">{movie.title}</h2>
                <p className="overview">{movie.overview}</p>
            </div>
        </div>
    );
}

export default FilmeDestaque;
