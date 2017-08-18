const db = require('../db/config')

const Movie = {}

Movie.findAll() = () => {
  return db.query('SELECT * FROM movies ORDER BY id ASC')
}

module.exports = Movie