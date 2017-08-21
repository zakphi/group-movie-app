# Favorite a Movie

## Express Side
* create a new table to hold the user id and movie id
```
CREATE TABLE IF NOT EXISTS users_movies (
  user_id INT REFERENCES users(id)
  movie_id INT REFERENCES movies(id)
);
```

* to favorite a movie, we write this model
```
INSERT INTO users_moves
VALUES (user_id, movie_id);
```

* to unfavorite a movie, we write this model
```
DELETE FROM users_moves
WHERE user_id = user_id_variable AND movie_id = movie_id_variable;
```

* not sure what to do for the controller or route

## React Side
### In App.js
* add a new state called featured
    * set the initial state to false
* create featureMovie function
    * takes an argument of id
    * set the state of featured to id
* bind the function
* pass the function and featured state to movieList component

### In movieList component
* pass the function and featured state to movie component

### In movie component
* add an onclick anonymous function
* in the anonymous function, we call the featureMovie function and pass in the movie id

Not sure how the two pieces would connect