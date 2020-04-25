import React from 'react';
import styled from 'styled-components';
import Categorie from './Categorie';
import { Contact, About } from './PageLink';
import Socials from './Socials';

const Side = styled.div`
  width: 50%;
  height: 100%;
  min-height: 250px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media ${({ theme }) => theme.medias.portrait} {
    width: 100%;
    align-items: flex-end;
    min-height: 600px;
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.desktopM}`} {
    min-height: 600px;
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.desktopS}`} {
    min-height: 500px;
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobile}`} {
    min-height: 350px;
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobileS}`} {
    min-height: 250px;
  };
`;
const ColorSide = styled(Side)`
  background-color: ${({ theme }) => theme.colors.lighten};
  border-right: 1px solid ${({ theme }) => theme.colors.normal};
  align-items: flex-end;
  @media ${({ theme }) => theme.medias.portrait} {
    align-items: flex-start;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.normal};
  };
`;

export const CategorieSide = () => (
  <ColorSide>
    {['deco', 'style', 'cuisine', 'voyages'].map((name) => <Categorie key={name} name={name} />)}
  </ColorSide>
);
export const LinkSide = () => (
  <Side>
    <Contact />
    <About />
    <Socials />
  </Side>
);
