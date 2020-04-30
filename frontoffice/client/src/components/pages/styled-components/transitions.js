import styled from 'styled-components';

const Body = styled.main`
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  &.fade-enter {
    opacity: 0;
    z-index: 1;
    pointer-events: none;
  }
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms linear 500ms;
  }
  &.fade-exit {
    opacity: 1;
    pointer-events: none;
  }
  &.fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 500ms linear;
  }
`;

export const TransitionDisplay = styled.div`
  opacity: ${({ appear }) => (appear ? 1 : 0)};
  transition: opacity 1s 0s;
`;
export default Body;
