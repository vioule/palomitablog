import { createGlobalStyle } from 'styled-components';

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
    padding: 0 200px;
    font-size: 16px;
    @media ${({ theme }) => theme.medias.mid} {
      padding: 0 150px;
      font-size: 14px;
    };
    @media ${({ theme }) => theme.medias.sml} {
      padding: 0 100px;
      font-size: 12px;
    };
    @media ${({ theme }) => theme.medias.portrait} {
      padding: 0 60px;
      font-size: 10px;
    };
    @media ${({ theme }) => theme.medias.phone} {
      padding: 0 30px;
      font-size: 8px;
    };
    @media ${({ theme }) => theme.medias.phonexs} {
      padding: 0 20px;
    };
  };
  button:hover {
    cursor: pointer;
  }
`;
export default Reset;
