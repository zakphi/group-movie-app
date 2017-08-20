import React from 'react';

const Movie = (props) => {
  return (
    <div 
      className={`movie ${props.feature === props.movie.id
        ? 'feature' 
        : ''}`}
    >
        <h3>{props.movie.title}</h3>
        <p>{props.movie.description}</p>
        <p>Genre: {props.movie.genre}</p>
        <span className="edit" onClick={() => props.selectEditedMovie(props.movie.id)}>Edit</span>
        <div className="featureme">
        {/*<i 
          onClick={() => props.featureMovie(props.movie.id)}
          className="fa fa-star fa-2x" 
        />*/}
        <button onClick={() => props.featureMovie(props.movie.id)}>favorite</button>
      </div>
    </div>
  )
}

export default Movie;