import styled from 'styled-components';

export const CasList = styled.ul`
display: flex;
gap: 20px;
flex-wrap: wrap;
padding: 10px 30px;
}
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc((100vw - 177px) / 6);

  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
`;

export const InfoWrapper = styled.div``;

export const Name = styled.h3`
  text-align: center;
`;

export const Character = styled.p`
  text-align: center;
`;