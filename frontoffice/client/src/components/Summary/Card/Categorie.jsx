import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const H3 = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
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

export default ({ categorie }) => <H3><Link to={{ pathname: `/${categorie}`, state: { scrollY: 0 } }}>{categorie}</Link></H3>;
