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
  @media ${({ theme }) => theme.medias.desktopM} {
    padding-right: calc((100% - 400px )/2);
  };
  @media ${({ theme }) => theme.medias.desktopS} {
    padding-right: calc((100% - 345px )/2);
  };
  @media ${({ theme }) => theme.medias.mobile} {
    padding-right: calc((100% - 230px )/2);
    font-size: 5rem;
  };
  @media ${({ theme }) => theme.medias.mobileS} {
    padding-right: calc((100% - 185px )/2);
  };
  @media ${({ theme }) => theme.medias.mobileXS} {
    padding-right: calc((100% - 145px )/2);
    font-size: 4rem;
  };
  @media ${({ theme }) => theme.medias.portrait} {
    text-align: left;
    direction: ltr;
    padding-left: calc((100% - 460px )/2);
    padding-right: 3rem;
    &:after{
      right: unset;
      left: 0;
      padding-left: none;
      padding-right: 3rem;
      text-align: right;
      clip-path: inset(0 100% 0 0);
    };
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.desktopM}`} {
    padding-left: calc((100% - 400px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.desktopS}`} {
    padding-left: calc((100% - 345px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobile}`} {
    padding-left: calc((100% - 230px )/2);
    font-size: 5rem;
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobileS}`} {
    padding-left: calc((100% - 185px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobileXS}`} {
    padding-left: calc((100% - 145px )/2);
    font-size: 4rem;
  };
`;

export default ({ name }) => (
  <StyledLink name={name}>
    <span>{name}</span>
  </StyledLink>
);
