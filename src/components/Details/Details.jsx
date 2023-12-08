import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

export default function Details() {
  const ourMovie = useSelector((store) => store.selectedMovie);

  return (
    <div data-testid="movieDetails">
      <Link to="/">
        <button data-testid="toList">back to movie list</button>
      </Link>
      <br></br>
      <h3>{ourMovie.title}</h3>
      <img src={ourMovie.poster} alt={ourMovie.title} />
      <p>{ourMovie.description}</p>
    </div>
  );
}
