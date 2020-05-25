import styled, { keyframes, css } from 'styled-components';

const appearAnimation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

export const AppearOnMount = styled.div`
  opacity: 0;
  animation: 500ms ease-in 500ms 1 forwards ${appearAnimation};
`;

export const appear = css`
  opacity: ${({ appear }) => (appear ? 1 : 0)};
  transition: opacity .5s 0s;
`;
