import { useState, useEffect } from 'react';
import { fetchMovies } from '../../tmdbAPI';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Main, Title } from './Home.styled';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/error/Error';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const { results } = await fetchMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <Main>
      <Title>Trending today</Title>
      {trendingMovies.length > 0 && <MoviesList movies={trendingMovies} />}
      {loading && <Loader />}
      {error && <Error />}
    </Main>
  );
}