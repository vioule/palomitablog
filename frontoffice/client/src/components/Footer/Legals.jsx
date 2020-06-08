import React from 'react';
import styled from 'styled-components';
import SafeLink from '../ReactRouterDom/SafeLink';

export const StyledSafeLink = styled(SafeLink)`
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    font-weight: 700;
  }
`;

export default () => (
  <StyledSafeLink to="/legals">
    Mentions légales
  </StyledSafeLink>
);
