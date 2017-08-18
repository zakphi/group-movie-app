const express = require('express')
const movieRoutes = express.Router()

const moviesController = require('../controllers/movies-controller')

movieRoutes.get('/', moviesController.index)

module.exports = movieRoutes