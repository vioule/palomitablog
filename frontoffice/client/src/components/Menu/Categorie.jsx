import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CategorieLayout } from './styled-components/layout';

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.special};
  color: ${({ theme }) => theme.colors.dark};
  text-shadow: 1px 1px 0 ${({ theme }) => theme.colors.white};
  font-size: 6.25rem;
  text-align: right;
  direction: rtl;
  font-weight: 700;
  &:after{
    content: '${({ name }) => name}';
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    text-align: left;
    text-shadow: none;
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.lighten};
    clip-path: inset(0 0 0 100%);
    transition: clip-path .5s cubic-bezier(.23, 1.25, .46, 1);
  };
  &:hover {
    &:after{
      clip-path: inset(0 0 0 0);
    };
  };
  @media ${({ theme }) => theme.medias.portrait} {
    text-align: left;
    direction: ltr;
    &:after{
      right: unset;
      left: 0;
      text-align: right;
      clip-path: inset(0 100% 0 0);
    };
  };
  
  ${CategorieLayout};
`;

export default ({ name }) => (
  <StyledLink name={name} to={`/${name}`} className="categorie">
    <span>{name}</span>
  </StyledLink>
);
