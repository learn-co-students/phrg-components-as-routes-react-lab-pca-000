import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h3>{director.name}</h3>
          <p>Movies:</p>
          <ul>
            {director.movies.map((mov, index) => (
              <li key={index}>{mov}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
