import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Hamburger from './Hamburger';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  height: 0;
  width: 100%;
  max-width: 1920px;
  z-index: 1001;
  transform: translateX(-50%);
`;

export default () => (
  <Header>
    <Logo />
    <Hamburger />
  </Header>
);
