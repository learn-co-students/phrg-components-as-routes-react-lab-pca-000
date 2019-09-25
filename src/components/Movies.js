import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((mov, index) => (
        <div key={index}>
          <h3>{mov.title}</h3>
          <p>Length: {mov.time}</p>
          <p>Genres</p>
          <ul>
            {mov.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
