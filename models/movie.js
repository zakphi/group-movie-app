const db = require('../db/config')

const Movie = {}

Movie.findAll() = () => {
  return db.query('SELECT * FROM movies ORDER BY id ASC')
}

Movie.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM movies
    WHERE id = $1
  `, [id])
}

Movie.create = (movie) => {
  return db.one(`
    INSERT INTO movies
    (title, description, genre)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [movie.title, movie.description, movie.genre])
}

Movie.update = (movie, id) => {
  return db.one(`
    UPDATE movies SET
    title = $1,
    description = $2,
    genre = $3,
    WHERE id = $4
    RETURNING *
  `, [movie.title, movie.description, movie.genre, id])
}

Movie.destroy = (id) => {
  return db.none(`
    DELETE FROM movies
    WHERE id = $1
  `, [id])
}

module.exports = Movie