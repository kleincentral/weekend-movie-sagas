import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Details() {
  return (
    <div data-testid="movieDetails">
      <Link to="/">
        <button data-testid="toList">back to movie list</button>
      </Link>
    </div>
  );
}
