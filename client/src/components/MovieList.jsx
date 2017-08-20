import React from 'react';

import Movie from './Movie';
import MovieAddForm from './MovieAddForm';
import MovieEditForm from './MovieEditForm';

const MoviesList = (props) => {
    return (
        <div className="moviespage">
            <MovieAddForm handleMovieSubmit={props.handleMovieSubmit} />
            <div className="movies-list">
            {props.movieData.map(movie => {
               if (props.currentMovieId === movie.id) {
                   return <MovieEditForm key={movie.id} movie={movie} handleMovieSubmit={props.handleMovieEditSubmit} />
               } else return <Movie movie={movie} selectEditedMovie={props.selectEditedMovie} key={movie.id} feature={props.feature} featureMovie={props.featureMovie} />
            })}
            </div>
        </div>
    )
}

export default MoviesList;
