import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

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
      <Grid container direction={"row"} alignItems={"center"} spacing={0}>
        <Link to="/details">
          <Card sx={{ maxHeight: 400, maxWidth: 200 }}>
            <CardMedia
              sx={{ height: 300, width: 200 }}
              image={movie.poster}
              title={movie.title}
              data-testid="toDetails"
              onClick={() => saveDetails(movie)}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </div>
  );
}
