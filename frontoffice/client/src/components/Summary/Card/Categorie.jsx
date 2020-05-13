import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const H3 = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.normal};
  @media ${({ theme }) => theme.medias.mobileM} {
    font-size: .8rem;
  };
  & a {
    color: ${({ theme }) => theme.colors.normal};
  }
  & a:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export default ({ categorie, link }) => <H3><Link to={link}>{categorie}</Link></H3>;
