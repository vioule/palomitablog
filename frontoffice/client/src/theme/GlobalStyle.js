import { createGlobalStyle, css } from 'styled-components';

const Animations = css`
.fade-enter {
  opacity: 0;
  z-index: 1;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
};
.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in 500ms;
};
.fade-exit {
  opacity: 1;
  pointer-events: none;
};
.fade-exit.fade-exit-active {
  opacity: 0;
  transition: opacity 500ms ease-out;
};
`;

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    text-decoration: none;
    border: none;
  };
  *:before, *:after {
    box-sizing: border-box
  };
  html {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 150px;
    font-size: 16px;
    @media ${({ theme }) => theme.medias.desktop} {
      padding: 0 110px;
      font-size: 14px;
    };
    @media ${({ theme }) => theme.medias.tablet} {
      padding: 0 90px;
    };
    @media ${({ theme }) => theme.medias.mobile} {
      padding: 0 50px;
    };
    @media ${({ theme }) => theme.medias.mobileM} {
      padding: 0 25px;
      font-size: 12px;
    };
    @media ${({ theme }) => theme.medias.mobileS} {
      padding: 0 20px;
    };
  };
  button {
    background: none;
  }
  button:hover {
    cursor: pointer;
  };
  ${Animations}
`;
export default Reset;
