import { axiosInstance } from '.';

export const getAllMovies = async () => {
  try {
    const response = await axiosInstance.get('/api/movies/get-all-movies');
    return response.data;
  } catch (err) {
    console.log('error in fetching movies', err);
    return err.response.data;
  }
};

export const addMovie = async (payload) => {
  try {
    const response = await axiosInstance.post('/api/movies/add-movie', payload);
    return response.data;
  } catch (err) {
    console.log('error in adding movie', err);
    return err.response.data;
  }
};

export const updateMovie = async (movieId, payload) => {
  try {
    const response = await axiosInstance.put(
      `/api/movies/update-movie/${movieId}`,
      payload
    );
    return response.data;
  } catch (err) {
    console.log('error in updating movie', err);
    return err.response.data;
  }
};

export const deleteMovie = async (movieId) => {
  try {
    const response = await axiosInstance.delete(
      `/api/movies/delete-movie/${movieId}`
    );
    return response.data;
  } catch (err) {
    console.log('error in deleting movie', err);
    return err.response.data;
  }
};
