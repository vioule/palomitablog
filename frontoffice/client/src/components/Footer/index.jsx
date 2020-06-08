import React from 'react';
import styled from 'styled-components';
import Socials from './Socials';
import Legals from './Legals';
import Copyright from './Copyright';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.special};
  font-size: .7rem;
  margin: 2rem 0;
  align-items: center;
  @media ${({ theme }) => theme.medias.mobileM} {
    flex-direction: column;
    &>* {
      margin-top: .5rem;
    }
    &>:first-child {
      margin-top: 0;
  }
  };
`;

export default () => (
  <StyledFooter>
    <Copyright />
    <Socials />
    <Legals />
  </StyledFooter>
);
