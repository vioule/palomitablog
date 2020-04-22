import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Hamburger from './Hamburger';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  width: 100%;
  max-width: 1920px;
  transform: translateX(-50%);
  left: 50%;
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.medias.mid} {
    padding: 16px;
  };
  @media ${({ theme }) => theme.medias.sml} {
    padding: 12px;
  };
  @media ${({ theme }) => theme.medias.portrait} {
    padding: 10px;
  };
  @media ${({ theme }) => theme.medias.phone} {
    padding: 7px;
  };
  @media ${({ theme }) => theme.medias.phonexs} {
    padding: 5px;
  };
`;

export default () => (
  <Header>
    <Logo />
    <Hamburger />
  </Header>
);
