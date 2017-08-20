import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);

    this.editCheck = this.editCheck.bind(this);
  }

editCheck (){
                if (!this.props.userState) {
                return '';
            } else {
               return (<span className="edit" onClick={() => this.props.selectEditedMovie(this.props.movie.id)}>Edit</span>);
            }
           }
render() {
  return (
    <div 
      className={`movie ${this.props.feature === this.props.movie.id
        ? 'feature' 
        : ''}`}
    >
        <h3>{this.props.movie.title}</h3>
        <p>{this.props.movie.description}</p>
        <p>Genre: {this.props.movie.genre}</p>
        {this.editCheck()}
        <div className="featureme">
        {/*<i 
          onClick={() => this.props.featureMovie(this.props.movie.id)}
          className="fa fa-star fa-2x" 
        />*/}
        <button onClick={() => this.props.featureMovie(this.props.movie.id)}>favorite</button>
        
      </div>
    </div>
  )
}
}

export default Movie;