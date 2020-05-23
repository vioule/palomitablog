import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  align-self: start;
  margin-top: .5rem;
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.special};
  color: ${({ theme }) => theme.colors.normal};
  font-size: .8rem;
  font-style: italic;
  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export default ({ link }) => <StyledLink to={link}>Continuer de lire</StyledLink>;
