import React from 'react';
import styled from 'styled-components';
import { articles } from '../styled-components';

export const Button = styled.button`
  ${articles};
  color: ${({ theme }) => theme.colors.normal};
  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export default ({ rest, onClick }) => (
  <Button onClick={onClick}>
    <b>{rest}</b>
    <span>
      {` article${rest > 1 ? 's' : ''} précédent${rest > 1 ? 's' : ''}`}
    </span>
  </Button>
);
