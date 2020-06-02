import React from 'react';
import styled from 'styled-components';
import SafeLink from '../ReactRouterDom/SafeLink';

export const StyledFooter = styled.footer`
  margin: 50px 0;
`;

export default () => (
  <StyledFooter>
    <SafeLink to="/legals">
      Mentions légales
    </SafeLink>
  </StyledFooter>
);
