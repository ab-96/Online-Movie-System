import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import movieData from "../data/movies.json";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const limitedMovies = movieData.slice(0, 120);
    setMovies(limitedMovies);
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(props.searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-24 px-44 mb-24">
      {filteredMovies.map((movie, index) => (
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
