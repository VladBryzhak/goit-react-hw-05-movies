import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  width: calc((100vw - 160px) / 5);

  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const LinkItem = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 275px;
`;

export const Image = styled.img`
  width: 100%;
  height: 413px;
  object-fit: cover;
`;

export const Title = styled.h2`
  text-align: center;
  margin: auto;
  padding: 10px 0;
  font-size: 16px;
  color: ${p => p.theme.colors.black};
`;