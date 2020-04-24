import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { CategorieSide, LinkSide } from './Sides';

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
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s 0s, visibility 0s 1s;

  ${({ trigger }) => (trigger && css`
    opacity: 1;
    visibility: visible;
    transition: opacity 1s 0s, visibility 0s 0s;
  `)};
  
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
