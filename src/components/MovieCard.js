import React from "react";
import Rate from "./Rate";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/Description/${movie.id}`}>
        <div key={movie.id} className="Movie-Container">
          <img src={movie.image} alt="" />
          <Rate rating={movie.rating} />
          <h1 className="Movie-Title">{movie.title}</h1>
          <div className="over-view">
            <h4 className="year">{movie.year}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
