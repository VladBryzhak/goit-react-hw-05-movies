import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'tmdbAPI';
import {
  CasList,
  CastItem,
  Image,
  InfoWrapper,
  Name,
  Character,
} from './Cast.styled';
import { Loader } from '../loader/Loader';
import { Error } from '../error/Error';

const defaultImg =
  'https://cdn.pixabay.com/photo/2015/04/18/11/03/profile-728591_1280.jpg';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        setError(false);
        const { cast } = await fetchCast(movieId);
        if (cast.length > 0) setCast(cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <>
      {cast.length > 0 && (
        <CasList>
          {cast.map(({ cast_id, name, profile_path, character }) => (
            <CastItem key={cast_id}>
              <Image
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : defaultImg
                }
                alt={name}
              />
              <InfoWrapper>
                <Name>{name}</Name>
                <Character>{`Character: ${character}`}</Character>
              </InfoWrapper>
            </CastItem>
          ))}
        </CasList>
      )}
      {loading && <Loader />}
      {error && <Error />}
    </>
  );
};