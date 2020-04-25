import styled from 'styled-components';
import { Instagram, Pinterest } from '../Socials';

const React = require('react');

const Socials = styled.div`
  padding-left: calc((100% - 460px)/2);
  padding-top: 1rem;
  @media ${({ theme }) => theme.medias.desktopM} {
    padding-left: calc((100% - 400px )/2);
  };
  @media ${({ theme }) => theme.medias.desktopS} {
    padding-left: calc((100% - 345px )/2);
  };
  @media ${({ theme }) => theme.medias.mobile} {
    padding-left: calc((100% - 230px )/2);
  };
  @media ${({ theme }) => theme.medias.mobileS} {
    padding-left: calc((100% - 185px )/2);
  };
  @media ${({ theme }) => theme.medias.mobileXS} {
    padding-left: calc((100% - 145px )/2);
  };
  @media ${({ theme }) => theme.medias.portrait} {
    padding-right: calc((100% - 460px )/2);
    padding-left: 0;
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.desktopM}`} {
    padding-right: calc((100% - 400px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.desktopS}`} {
    padding-right: calc((100% - 345px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobile}`} {
    padding-right: calc((100% - 230px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobileS}`} {
    padding-right: calc((100% - 185px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobileXS}`} {
    padding-right: calc((100% - 145px )/2);
  };
`;

export default () => (
  <Socials>
    <Instagram className="social" />
    <Pinterest className="social" />
  </Socials>
);
