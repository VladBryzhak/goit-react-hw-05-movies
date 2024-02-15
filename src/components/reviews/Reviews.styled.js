import styled from 'styled-components';

export const ReviewsList = styled.ul`
  padding: 10px 30px;
`;

export const ListItem = styled.li`
  & + & {
    margin-top: 20px;
  }
`;

export const AutorName = styled.h3`
  margin-bottom: 10px;
`;

export const Info = styled.p`
  padding: 10px 30px;
`;