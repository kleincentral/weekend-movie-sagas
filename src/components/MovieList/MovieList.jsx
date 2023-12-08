import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
          return (
            <div data-testid="movieItem" key={movie.id}>
              <h3>{movie.title}</h3>
              <Link to="/details">
                <img
                  data-testid="toDetails"
                  src={movie.poster}
                  alt={movie.title}
                />
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
