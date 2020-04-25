import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { CategorieSide, LinkSide } from './Sides';
import Animation from './styled-components/animation';

const Nav = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  max-width: 1920px;
  background-color: white;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100vh;
  z-index: 1000;
  overflow: auto;

  ${Animation};
  
  @media ${({ theme }) => theme.medias.portrait} {
    flex-direction: column;
  };
`;

const Menu = ({ trigger }) => (
  <Nav trigger={trigger}>
    <CategorieSide />
    <LinkSide />
  </Nav>
);

export default connect(
  (state) => ({ trigger: state.menu }),
)(Menu);
