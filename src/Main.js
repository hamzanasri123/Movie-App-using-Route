import React, { useState } from "react";
import { moviesData } from "./components/MoviesData";
import Search from "./components/Search";
import MoviesList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

import "./App.css";

function Main() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [searchMovie, setSearchMovie] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);

  const AddNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
    moviesData.push(newMovie);
  };

  return (
    <div className="App">
      <nav>
        <div className="logo">
          <img
            src="https://lh3.googleusercontent.com/CtJZQ5wzxkjm6H9fvmmujKJSN9TytDqvmvl_vkWPfi62gObAZWHCGCenm0SKjZEzwO0"
            alt=""
          />
          <h1 className="movie-app">
            ovie <span>App</span>
          </h1>
        </div>

        <AddMovie AddNewMovie={AddNewMovie} />
        <Search
          setSearchMovie={setSearchMovie}
          ratingSearch={ratingSearch}
          setRatingSearch={setRatingSearch}
        />
      </nav>

      <MoviesList
        moviesList={moviesList}
        searchMovie={searchMovie}
        ratingSearch={ratingSearch}
      />
    </div>
  );
}

export default Main;
