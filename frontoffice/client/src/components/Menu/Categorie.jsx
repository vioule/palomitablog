import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.special};
  color: ${({ theme }) => theme.colors.dark};
  text-shadow: 1px 1px 0 ${({ theme }) => theme.colors.white};
  font-size: 6.25rem;
  text-align: right;
  padding-right: calc((100% - 460px)/2);
  padding-left: 3rem;
  direction: rtl;
  &:after{
    content: '${({ name }) => name}';
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    padding-left: 3rem;
    text-align: left;
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
  @media ${({ theme }) => theme.medias.mid} {
    padding-right: calc((100% - 400px )/2);
  };
  @media ${({ theme }) => theme.medias.sml} {
    padding-right: calc((100% - 345px )/2);
  };
  @media ${({ theme }) => theme.medias.portrait} {
    text-align: left;
    direction: ltr;
    padding-left: calc((100% - 285px )/2);
    padding-right: 3rem;
    font-size: 5rem;
    &:after{
      right: unset;
      left: 0;
      padding-left: none;
      padding-right: 3rem;
      text-align: right;
      clip-path: inset(0 100% 0 0);
    };
  };
  @media ${({ theme }) => theme.medias.phone} {
    padding-left: calc((100% - 185px )/2);
  };
  @media ${({ theme }) => theme.medias.phonexs} {
  };
`;

export default ({ name }) => (
  <StyledLink name={name}>
    <span>{name}</span>
  </StyledLink>
);
