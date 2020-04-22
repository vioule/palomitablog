import styled from 'styled-components';

const Body = styled.main`
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: lightblue;
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
export default Body;
