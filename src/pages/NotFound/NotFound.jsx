import { Link } from 'react-router-dom';
import { MessageWrapper } from './NoteFound.styled';

export default function NotFound() {
  return (
    <MessageWrapper>
      <b>
        The specified address does not exist. Please follow this link to
        the&nbsp;
      </b>
      <Link to="/">home page</Link>
    </MessageWrapper>
  );
}