const express = require('express');
const router = express.Router();

const {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
} = require('../controllers/movieController');

router.post('/add-movie', addMovie);
router.get('/get-all-movies', getAllMovies);
router.put('/update-movie/:movieId', updateMovie);
router.delete('/delete-movie/:movieId', deleteMovie);

module.exports = router;
