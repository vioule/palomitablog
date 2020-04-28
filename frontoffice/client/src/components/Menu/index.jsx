import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { CategorieSide, LinkSide } from './Sides';
import Animation from './styled-components/animation';
import setMenu from '../../store/menu/actions';

export const StyledNav = styled.nav`
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

export const Nav = ({ trigger, setMenu }) => {
  const onClick = (e) => {
    e.stopPropagation();
    return e.target.className.search(/(categorie|pagelink)\b/g) > -1
      ? setMenu(!trigger)
      : null;
  };
  return (
    <StyledNav trigger={trigger} onClick={onClick}>
      <CategorieSide />
      <LinkSide />
    </StyledNav>
  );
};

export default connect(
  (state) => ({ trigger: state.menu }),
  { setMenu },
)(Nav);
