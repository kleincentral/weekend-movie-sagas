import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MovieListItem from "../MovieListItem/MovieListItem";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return <MovieListItem key={movie.id} movie={movie} />;
        })}
      </section>
    </main>
  );
}

export default MovieList;
