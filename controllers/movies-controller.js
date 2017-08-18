const Movie = require('../models/movie')

const moviesController = {}

moviesController.index = (req, res) => {
  Movie.findAll()
    .then(movies => {
      res.json({
        message: 'ok',
        data: movies
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

moviesController.show = (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.json({
        message: 'ok',
        data: movie
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

moviesController.create = (req, res) => {
  Movie.create({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre
  }, req.user.id)
    .then(movie => {
      res.json({
        message: 'movie added successfully',
        data: movie
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

moviesController.update = (req, res) => {
  Movie.update({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre
  }, req.params.id)
    .then(movie => {
      res.json({
        message: 'movie updated successfully',
        data: movie
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

moviesController.delete = (req, res) => {
  Movie.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'movie delete successfully'
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

module.exports = moviesController