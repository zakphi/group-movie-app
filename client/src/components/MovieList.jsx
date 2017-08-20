import React, { Component } from 'react';

import Movie from './Movie';
import MovieAddForm from './MovieAddForm';
import MovieEditForm from './MovieEditForm';

class MoviesList extends Component {
    constructor() {
        super();

        this.checkLogIn = this.checkLogIn.bind(this);
    }

    checkLogIn (){
                if (!this.props.userState) {
                return '';
            } else {
               return (<MovieAddForm handleMovieSubmit={this.props.handleMovieSubmit} />);
            }
           }

    render (){
    return (

        <div className="moviespage">
            {this.checkLogIn()}
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
}

export default MoviesList;
