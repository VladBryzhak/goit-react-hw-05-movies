import axios from 'axios';

const API_KEY = '4832a7e7e601b934383a7e7c97019b7b';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const fetchMovies = async () => {
  const response = await axios.get(`/3/trending/all/day?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieByID = async movieId => {
  const response = await axios.get(`3/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    `/3/search/movie?query=${query}&page=1&api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(`/3/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(`/3/movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data;
};