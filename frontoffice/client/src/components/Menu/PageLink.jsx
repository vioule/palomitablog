import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.special};
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.8rem;
  line-height: 1.8rem;
  padding-left: calc((100% - 460px)/2);
  padding-right: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  &:after{
    content: '${({ name }) => name}';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 3.8rem;
    padding-right: 3rem;
    text-align: right;
    background-color: ${({ theme }) => theme.colors.lighten};
    color: ${({ theme }) => theme.colors.normal};
    clip-path: inset(0 100% 0 0);
    transition: clip-path .5s cubic-bezier(.23, 1.25, .46, 1);
  };
  &:hover {
    &:after{
      clip-path: inset(0 0 0 0);
    };
  };
  @media ${({ theme }) => theme.medias.desktopM} {
    padding-left: calc((100% - 400px )/2);
  };
  @media ${({ theme }) => theme.medias.desktopS} {
    padding-left: calc((100% - 345px )/2);
  };
  @media ${({ theme }) => theme.medias.mobile} {
    padding-left: calc((100% - 230px )/2);
  };
  @media ${({ theme }) => theme.medias.mobileS} {
    padding-left: calc((100% - 185px )/2);
  };
  @media ${({ theme }) => theme.medias.mobileXS} {
    padding-left: calc((100% - 145px )/2);
  };
  @media ${({ theme }) => theme.medias.portrait} {
    text-align: right;
    direction: rtl;
    padding-right: calc((100% - 460px )/2);
    padding-left: 3rem;
    &:after{
      left: 0;
      right: unset;
      padding-right: 0;
      padding-left: 3rem;
      text-align: left;
      clip-path: inset(0 0 0 100%);
    };
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.desktopM}`} {
    padding-right: calc((100% - 400px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.desktopS}`} {
    padding-right: calc((100% - 345px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobile}`} {
    padding-right: calc((100% - 230px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobileS}`} {
    padding-right: calc((100% - 185px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobileXS}`} {
    padding-right: calc((100% - 145px )/2);
  };
`;

export const Contact = () => (
  <StyledLink name="Contact" to="/contact">
    <span>Contact</span>
  </StyledLink>
);
export const About = () => (
  <StyledLink name="A propos" to="/about">
    <span>A propos</span>
  </StyledLink>
);
