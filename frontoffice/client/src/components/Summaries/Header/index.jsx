import React from 'react';
import styled from 'styled-components';
import Categorie from './Categorie';
import { Line } from '../styled-components';
import Articles from './Articles';


export const Div = styled.div`
  margin-top: 5rem;
  color: ${({ theme }) => theme.colors.dark};
  @media ${({ theme }) => theme.medias.mobileM} {
    margin-top: 2.5rem;
  };
`;

export default ({ categorie, total }) => (
  <Div>
    <Categorie categorie={categorie} />
    <Line />
    <Articles total={total} />
  </Div>
);
