import React, { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return; // Prevent adding empty titles

    const newMovie = {
      id: Date.now(),
      title,
      watched: false,
    };

    onAddMovie(newMovie);
    setTitle(""); // Clear input field
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Movie:</h3>
      <input
        type="text"
        placeholder="Movie Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
