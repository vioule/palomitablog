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

export default ({ count }) => (
  <Button>
    <b>{count}</b>
    <span>
      {` article${count > 1 ? 's' : ''} précédent${count > 1 ? 's' : ''}`}
    </span>
  </Button>
);
