import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export const Main = styled.main`
  padding-top: 10px;
`;

export const BackLink = styled(NavLink)`
  display: inline-block;
  padding: 2px 4px;
  margin-left: 30px;
  border: 1px solid #000000;
  border-radius: 5px;
  font-size: 10px;
  color: ${p => p.theme.colors.black};

  &:hover,
  &:focus {
    background-color: #cccccc;
  }
`;

export const Arrow = styled(BsArrowLeft)`
  display: inline-block;
`;

export const MainData = styled.div`
  display: flex;
  padding: 10px 30px;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
`;

export const GenreList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const AddInfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 30px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const LinkItem = styled(NavLink)`
  font-weight: 600;
  color: ${p => p.theme.colors.black};

  &.active {
    color: ${p => p.theme.colors.error};
  }
`;