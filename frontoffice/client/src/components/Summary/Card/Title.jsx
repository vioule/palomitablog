import React from 'react';
import styled from 'styled-components';

export const H2 = styled.h2`
  margin-top: .5rem;
  font-weight: 400;
  font-size: 2.5rem;
  text-transform: uppercase;
  hyphens: auto;
  @media ${({ theme }) => theme.medias.desktop} {
    font-size: 2rem;
  };
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 3rem;
    margin-top: .25rem;
  };
  @media ${({ theme }) => theme.medias.mobileM} {
    font-size: 2rem;
  };
`;

export default ({ title }) => <H2>{title}</H2>;
