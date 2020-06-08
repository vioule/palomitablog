import React from 'react';
import styled from 'styled-components';
import { Instagram, Pinterest } from '../Socials';

const Div = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  @media ${({ theme }) => theme.medias.mobileM} {
    position: unset;
    left: unset;
    top: unset;
    transform: unset;
  };
`;

export default () => (
  <Div>
    <Instagram />
    <Pinterest />
  </Div>
);
