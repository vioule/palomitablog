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
  font-weight: 700;
  .phone {
    display: none;
  }
  @media ${({ theme }) => theme.medias.desktop} {
    margin: 16px 23px;
  };
  @media ${({ theme }) => theme.medias.tablet} {
    margin: 12px;
  };
  @media ${({ theme }) => theme.medias.mobile} {
    margin: 15px;
    font-size: 1.5rem;
    & .desktop {
      display: none;
    }
    & .phone {
      display: inline;
    }
  };
  @media ${({ theme }) => theme.medias.mobileM} {
    font-size: 1.2rem;
    margin: 7px;
  };
  @media ${({ theme }) => theme.medias.mobileS} {
    margin: 5px;
  };
  @media ${({ theme }) => theme.medias.portrait} {
    & .desktop {
      display: none;
    }
    & .phone {
      display: inline;
    }
  };
`;

export const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.special};
  color: ${({ theme }) => theme.colors.black};
`;

export default () => (
  <Logo>
    <StyledLink to={{ pathname: '/', state: { scrollY: 0 } }} className="desktop">Palomita</StyledLink>
    <StyledLink to={{ pathname: '/', state: { scrollY: 0 } }} className="phone">P.</StyledLink>
  </Logo>
);
