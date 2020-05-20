import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { H3 } from '../../styled-components';

export const StyledH3 = styled(H3)`
  & a {
    color: ${({ theme }) => theme.colors.normal};
  }
  & a:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export default ({ categorie }) => <StyledH3><Link to={{ pathname: `/${categorie}`, state: { scrollY: 0 } }}>{categorie}</Link></StyledH3>;
