import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export default function MovieListItem({ movie }) {
  const dispatch = useDispatch();

  const saveDetails = (movie) => {
    console.log("SAVE ME!", movie);
    dispatch({
      type: "SET_OUR_MOVIE",
      payload: movie,
    });
  };

  return (
    <div data-testid="movieItem" key={movie.id}>
      <h3>{movie.title}</h3>
      <Link to="/details">
        <img
          onClick={() => saveDetails(movie)}
          data-testid="toDetails"
          src={movie.poster}
          alt={movie.title}
        />
      </Link>
    </div>
  );
}
