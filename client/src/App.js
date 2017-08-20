import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import Login from './components/Login';
import Register from './components/Register';

import MovieList from './components/MovieList'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: false,
      user: null,
      currentMovieId: null,
      feature: null,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
    this.handleMovieEditSubmit = this.handleMovieEditSubmit.bind(this);
    this.selectEditedMovie = this.selectEditedMovie.bind(this);
    this.featureMovie = this.featureMovie.bind(this);
  }

  componentDidMount() {
    axios.get('/movies')
    .then(res => {
      this.setState({
        movieData: res.data.data,
      });
    }).catch(err => console.log(err));
  }

  // featureMovie function 
  featureMovie(id) {
    this.setState({
      feature: id,
    });
  }

  decideWhichPage() {
    switch(this.state.currentPage) {
      case 'home':
        return <Home />;
        break;
      case 'login':
        if (!this.state.auth) {
          return <Login handleLoginSubmit={this.handleLoginSubmit} />;
        } else return <Home />;
        break;
      case 'register':
        if (!this.state.auth) {
          return <Register handleRegisterSubmit={this.handleRegisterSubmit} />;
        } else return <Home />;
      case 'movies':
        return (<MovieList
          userState={this.state.auth}
          movieData={this.state.movieData}
          handleMovieSubmit={this.handleMovieSubmit}
          handleMovieEditSubmit={this.handleMovieEditSubmit}
          selectEditedMovie={this.selectEditedMovie}
          currentMovieId={this.state.currentMovieId} />)
        break;
      default:
        break;
    }
  }

  // AUTH

  handleLoginSubmit(e, username, password) {
    e.preventDefault();
    axios.post('/auth/login', {
      username,
      password,
    }).then(res => {
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
      });
    }).catch(err => console.log(err));
  }


  handleRegisterSubmit(e, username, password, email) {
    e.preventDefault();
    axios.post('/auth/register', {
      username,
      password,
      email,
    }).then(res => {
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
      });
    }).catch(err => console.log(err));
  }

  logOut() {
    axios.get('/auth/logout')
      .then(res => {
        console.log(res);
        this.setState({
          auth: false,
        });
      }).catch(err => console.log(err));
  }

  handleMovieSubmit(e, title, description, genre) {
    e.preventDefault();
    axios.post('/movies', {
      title,
      description,
      genre,
    }).then(res => {
      this.resetMovies();
    }).catch(err => console.log(err));
  }

  handleMovieEditSubmit(e, title, description, genre) {
    e.preventDefault();
    axios.put(`/movies/${this.state.currentMovieId}`, {
      title, 
      description,
      genre,
    }).then(res => {
      this.resetMovies();
    }).catch(err => console.log(err));
  }

  selectEditedMovie(id) {
    this.setState({
      currentMovieId: id,
    })
  }

  resetMovies() {
    axios.get('/movies')
    .then(res => {
      this.setState({
        movieData: res.data.data,
        currentMovieId: null,
      })
    }).catch(err => console.log(err));
  }


  // RENDER

  render() {
    return (
      <Router>
        <div className="App">
          <Header logOut={this.logOut} />
          <Route exact path='/' component={Home} />
          <Route exact path='/movies' render={() => <MovieList
            movieData={this.state.movieData}
            handleMovieSubmit={this.handleMovieSubmit}
            handleMovieEditSubmit={this.handleMovieEditSubmit}
            selectEditedMovie={this.selectEditedMovie}
            currentMovieId={this.state.currentMovieId}
            featureMovie={this.featureMovie}
            feature={this.state.feature} />} />
            <Route exact path='/login' render={() => <Login handleLoginSubmit={this.handleLoginSubmit} />} />
            <Route exact path='/register' render={() => <Register handleRegisterSubmit={this.handleRegisterSubmit} />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;