import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PageLinkLayout } from './styled-components/layout';

export const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.special};
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.8rem;
  line-height: 1.8rem;
  &:after{
    content: '${({ name }) => name}';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 3.8rem;
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
  @media ${({ theme }) => theme.medias.portrait} {
    text-align: right;
    direction: rtl;
    &:after{
      left: 0;
      right: unset;
      text-align: left;
      clip-path: inset(0 0 0 100%);
    };
  };

  ${PageLinkLayout};
`;

export const Contact = () => (
  <StyledLink name="Contact" to="/contact" className="pagelink">
    <span>Contact</span>
  </StyledLink>
);
export const About = () => (
  <StyledLink name="A propos" to="/about" className="pagelink">
    <span>A propos</span>
  </StyledLink>
);
