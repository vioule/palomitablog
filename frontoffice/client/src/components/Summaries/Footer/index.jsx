import React from 'react';
import styled from 'styled-components';
import { Line } from '../styled-components';
import { Div as HeaderDiv } from '../Header';
import Articles from './Articles';

export const Div = styled(HeaderDiv)`
  text-align: center;
`;

export default ({ count }) => (
  <Div>
    <Line />
    <Articles count={count} />
  </Div>
);
