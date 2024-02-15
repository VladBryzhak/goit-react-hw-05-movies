import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  padding: 0 30px;
`;

export const Link = styled(NavLink)`
  padding: 20px 0;
  color: ${p => p.theme.colors.black};

  & + & {
    margin-left: 20px;
  }

  &.active {
    color: red;
  }
`;