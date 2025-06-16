const MovieModel = require('../models/movieModel');

exports.addMovie = async (req, res) => {
  try {
    const movie = await MovieModel.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Movie added successfully!',
      data: movie,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await MovieModel.find();
    res.status(200).json({
      success: true,
      message: 'Movies fetched successfully',
      data: movies,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const movie = await MovieModel.findByIdAndUpdate(
      req.params.movieId,
      req.body
    );
    res.status(200).json({
      success: true,
      message: 'Movie updated successfully',
      data: movie,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await MovieModel.findByIdAndDelete(req.params.movieId);
    res.status(200).json({
      success: true,
      message: 'Movie deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
