import React from 'react';
import styled from 'styled-components';
import Categorie from './Categorie';
import { Line, running } from '../styled-components';
import Articles from './Articles';


export const Div = styled.div`
  ${running};
`;

export default ({ categorie, total }) => (
  <Div>
    <Categorie categorie={categorie} />
    <Line />
    <Articles total={total} />
  </Div>
);
