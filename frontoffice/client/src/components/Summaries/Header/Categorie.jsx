import React from 'react';
import styled from 'styled-components';
import { H3 } from '../styled-components';

export const StyledH3 = styled(H3)`
  @media ${({ theme }) => theme.medias.tablet} {
    padding-left: .5rem;
  };
`;

export default ({ categorie }) => (categorie ? <StyledH3>{categorie}</StyledH3> : null);
