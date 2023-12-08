const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// router.get("/", (req, res) => {
//   // Add query to get all genres
//   res.sendStatus(500);
// });

router.get("/:id", (req, res) => {
  const sqlText = `
  SELECT 
    "genres".name
  FROM "movies"
    LEFT JOIN "movies_genres"
    ON "movies"."id"= "movies_genres"."movie_id"
    JOIN "genres"
    ON "movies_genres".genre_id= "genres".id
  WHERE "movies".id = $1;`;
  const sqlValues = [req.params.id];
  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get movie genra", err);
      res.sendStatus(500);
    });
});

module.exports = router;
