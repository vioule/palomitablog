import React from 'react';
import styled from 'styled-components';
import Categorie from './Categorie';
import { Line } from '../styled-components';
import Articles from './Articles';


export const Div = styled.div`
  color: ${({ theme }) => theme.colors.dark};
`;

export default ({ categorie, total }) => (
  <Div>
    <Categorie categorie={categorie} />
    <Line />
    <Articles total={total} />
  </Div>
);
