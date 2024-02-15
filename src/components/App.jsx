import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Cast } from './cast/Cast';
import { Reviews } from './reviews/Reviews';
import { lazy } from 'react';

const Home = lazy(() => import('pages/home/Home'));
const Movies = lazy(() => import('pages/movie'));
const MovieDetails = lazy(() => import('pages/movieDetails/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
