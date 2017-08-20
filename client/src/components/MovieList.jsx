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
            {this.props.movieData.map(movie => {
               if (this.props.currentMovieId === movie.id) {
                   return <MovieEditForm key={movie.id} movie={movie} handleMovieSubmit={this.props.handleMovieEditSubmit} />
               } else return <Movie movie={movie} selectEditedMovie={this.props.selectEditedMovie} key={movie.id} feature={this.props.feature} featureMovie={this.props.featureMovie} userState={this.props.userState} />

            })}
            </div>
        </div>
    )
    }
}

export default MoviesList;
