import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: inline;
  margin: 20px;
  line-height: 1rem;
  font-size: 1.2rem;
  .phone {
    display: none;
  }
  @media ${({ theme }) => theme.medias.mid} {
    margin: 16px;
  };
  @media ${({ theme }) => theme.medias.sml} {
    margin: 12px;
  };
  @media ${({ theme }) => theme.medias.portrait} {
    & .desktop {
      display: none;
    }
    & .phone {
      display: inline;
    }
    margin: 10px;
  };
  @media ${({ theme }) => theme.medias.phone} {
    margin: 7px;
  };
  @media ${({ theme }) => theme.medias.phonexs} {
    margin: 5px;
  };
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
