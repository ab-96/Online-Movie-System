import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import movieData from "../data/movies.json";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const limitedMovies = movieData.slice(0, 30);

    setMovies(limitedMovies);
  }, []);

  return (
    <div className="flex flex-wrap  items-center justify-center gap-x-5 gap-y-24 px-44 mb-24">
      {movies.map((movie, index) => (
        <MovieCard
          key={movie.imdbId.toString() + index}
          img={movie.Poster}
          title={movie.Title}
          genre={movie.Genre}
          score={movie["IMDB Score"]}
        />
      ))}
    </div>
  );
};

export default Movies;
