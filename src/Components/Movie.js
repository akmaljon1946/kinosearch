import React from 'react';
import PropTypes from "prop-types";


function Movie ({ year, poster, title, summary, rating }) {
  return (
    <div>
      <div>
        <img src={ poster } alt={ title } title={ title } />
      </div>
      <p>{ title }</p>
      <h2>{ 'Rating' } { rating }</h2>
      <h3>{ year }</h3>
      <p>{ summary }</p>
    </div>
  );
}

Movie.propTypes = {
  Id: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,

};

export default Movie;