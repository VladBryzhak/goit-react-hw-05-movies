import { useLocation } from 'react-router-dom';
import { List, ListItem, LinkItem, Image, Title } from './MovieList.styled';

const defaultImg =
  'https://kartinki.pics/uploads/posts/2021-11/1636576247_22-kartinkin-net-p-kinokompaniya-art-pikchers-krasivie-arti-27.jpg';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ title, name, id, poster_path }) => (
        <ListItem key={id}>
          <LinkItem to={`/movies/${id}`} state={{ from: location }}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImg
              }
              alt={title}
            />
            <Title>{title || name}</Title>
          </LinkItem>
        </ListItem>
      ))}
    </List>
  );
};