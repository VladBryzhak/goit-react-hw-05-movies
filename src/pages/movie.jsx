import { MoviesList } from '../components/movieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchMoviesByQuery } from '../tmdbAPI';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/searchForm/SearchForm';
import { Main } from './home/Home.styled';
import { Loader } from '../components/loader/Loader';
import { Error } from '../components/error/Error';

export default function Movies() {
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [params] = useSearchParams();
  const query = params.get('query') ?? '';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query === '') return;

    setLoading(true);
    setError(false);
    async function getMoviesByQuery() {
      try {
        const { results } = await fetchMoviesByQuery(query);
        setMoviesByQuery(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getMoviesByQuery();
  }, [query]);

  return (
    <Main>
      <SearchForm />
      {moviesByQuery.length > 0 && <MoviesList movies={moviesByQuery} />}
      {loading && <Loader />}
      {error && <Error />}
    </Main>
  );
}