import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'tmdbAPI';
import { Loader } from '../loader/Loader';
import { Error } from '../error/Error';
import { ReviewsList, ListItem, AutorName, Info } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        setError(false);
        const { results } = await fetchReviews(movieId);
        if (results.length > 0) setReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getReviews();
  }, [movieId]);

  return reviews.length > 0 ? (
    <>
      <ReviewsList>
        {reviews.map(({ id, author, content }) => (
          <ListItem key={id}>
            <AutorName>{author}</AutorName>
            <p>{content}</p>
          </ListItem>
        ))}
      </ReviewsList>
      {loading && <Loader />}
      {error && <Error />}
    </>
  ) : (
    <Info>We don't have any reviews for this movie.</Info>
  );
};