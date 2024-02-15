import styled from 'styled-components';

export const MessageWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: ${p => p.theme.colors.error};
  text-align: center;
`;