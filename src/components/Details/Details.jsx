import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

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
    <div data-testid="movieDetails" className="centered">
      <Link to="/">
        <Button data-testid="toList">back to movie list</Button>
      </Link>
      <Grid container direction={"column"} alignItems={"center"}>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            sx={{ height: 600 }}
            image={ourMovie.poster}
            title={ourMovie.title}
            data-testid="movieDetail"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {ourMovie.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Genras:{" "}
              {ourGenras &&
                ourGenras.map((index) => {
                  return <span>{index.name} </span>;
                })}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>{ourMovie.description}</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
