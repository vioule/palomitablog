import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.div`
  z-index: 100;
  display: inline;
  line-height: 1rem;
  font-size: 1.2rem;
  .phone {
    display: none;
  }
  @media ${({ theme }) => theme.medias.portrait} {
    & .desktop {
      display: none;
    }
    & .phone {
      display: inline;
    }
  }
`;

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.special};
  color: ${({ theme }) => theme.colors.black};
`;

export default () => (
  <Logo>
    <StyledLink to="/" className="desktop">Palomita</StyledLink>
    <StyledLink to="/" className="phone">P.</StyledLink>
  </Logo>
);
