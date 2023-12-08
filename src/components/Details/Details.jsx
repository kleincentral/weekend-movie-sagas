import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Details() {
  const dispatch = useDispatch();

  const ourMovie = useSelector((store) => store.selectedMovie);
  const ourGenras = useSelector((store) => store.selectedGenra);

  useEffect(() => {
    dispatch({ type: "FETCH_GENRES", payload: ourMovie.id });
  }, []);
  console.log(ourGenras);
  console.log(ourMovie.poster);

  return (
    <div data-testid="movieDetails">
      <Link to="/">
        <button data-testid="toList">back to movie list</button>
      </Link>
      <br></br>
      <h3>{ourMovie.title}</h3>
      <img
        data-testid="movieDetail"
        src={ourMovie.poster}
        alt={ourMovie.title}
      />
      <h4>
        Genras:{" "}
        {ourGenras.map((index) => {
          return <span>{index.name} </span>;
        })}
      </h4>
      <p>{ourMovie.description}</p>
    </div>
  );
}
