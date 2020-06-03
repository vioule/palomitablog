import React from 'react';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  font-family: ${({ theme }) => theme.fonts.classic};
  font-weight: 300;
  font-size: .8rem;
  margin-top: .25rem;
`;

export default () => (
  <StyledDiv>Une erreur est survenue</StyledDiv>
);
