import React from 'react';
import styled from 'styled-components';
import SafeLink from '../../../ReactRouterDom/SafeLink';
import { H3 } from '../../styled-components';

export const StyledH3 = styled(H3)`
  & a {
    color: ${({ theme }) => theme.colors.normal};
  }
  & a:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export default ({ categorie }) => <StyledH3><SafeLink to={`/${categorie}`}>{categorie}</SafeLink></StyledH3>;
