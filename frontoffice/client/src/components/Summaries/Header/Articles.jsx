import React from 'react';
import styled from 'styled-components';
import { articles } from '../styled-components';

export const Div = styled.div`
  ${articles};
  text-align: right;
  @media ${({ theme }) => theme.medias.tablet} {
    padding-right: .5rem;
  };
`;

export default ({ total }) => (
  <Div>
    <b>{total}</b>
    <span>
      {` article${total > 1 ? 's' : ''}`}
    </span>
  </Div>
);
