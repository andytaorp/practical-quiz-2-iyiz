import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import Movie from "./Movie";

function App() {
  const [movies, setMovies] = useState([]);

  function handleAddMovie(newMovie) {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  }

  function handleToggleWatched(id) {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  }

  function handleDeleteMovie(id) {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  }

  return (
    <div className="app">
      <h1>Favorite Movies</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <ul>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            onToggleWatched={handleToggleWatched}
            onDeleteMovie={handleDeleteMovie}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
