import React from "react";

function Movie({ movie, onToggleWatched, onDeleteMovie }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={movie.watched}
        onChange={() => onToggleWatched(movie.id)}
      />
      <span
        style={movie.watched ? { textDecoration: "line-through" } : {}}
      >
        {movie.title}
      </span>
      <button onClick={() => onDeleteMovie(movie.id)}>Delete</button>
    </li>
  );
}

export default Movie;
