import { css } from 'styled-components';

export const CategorieLayout = css`
  padding-right: calc((100% - 460px)/2);
  padding-left: 3rem;
  &:after{
    padding-left: 3rem;
  };
  @media ${({ theme }) => theme.medias.desktop} {
    padding-right: calc((100% - 400px )/2);
  };
  @media ${({ theme }) => theme.medias.mobile} {
    padding-right: calc((100% - 320px )/2);
    font-size: 5rem;
  };
  @media ${({ theme }) => theme.medias.mobileM} {
    padding-right: calc((100% - 275px )/2);
  };
  @media ${({ theme }) => theme.medias.mobileS} {
    padding-right: calc((100% - 220px )/2);
    font-size: 4rem;
  };
  @media ${({ theme }) => theme.medias.portrait} {
    padding-left: calc((100% - 460px )/2);
    padding-right: 3rem;
    &:after{
      padding-left: 0;
      padding-right: 3rem;
    };
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.desktop}`} {
    padding-left: calc((100% - 400px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobile}`} {
    padding-left: calc((100% - 320px )/2);
    font-size: 5rem;
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobileM}`} {
    padding-left: calc((100% - 275px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobileS}`} {
    padding-left: calc((100% - 220px )/2);
    font-size: 4rem;
  };
`;

export const SocialsLayout = css`
  padding-left: calc((100% - 460px)/2);
  padding-top: 1rem;
  @media ${({ theme }) => theme.medias.desktop} {
    padding-left: calc((100% - 400px )/2);
  };
  @media ${({ theme }) => theme.medias.mobile} {
    padding-left: calc((100% - 320px )/2);
  };
  @media ${({ theme }) => theme.medias.mobileM} {
    padding-left: calc((100% - 275px )/2);
  };
  @media ${({ theme }) => theme.medias.mobileS} {
    padding-left: calc((100% - 220px )/2);
  };
  @media ${({ theme }) => theme.medias.portrait} {
    padding-right: calc((100% - 460px )/2);
    padding-left: 3rem;
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.desktop}`} {
    padding-right: calc((100% - 400px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobile}`} {
    padding-right: calc((100% - 320px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobileM}`} {
    padding-right: calc((100% - 275px )/2);
  };
  @media ${({ theme }) => `${theme.medias.portrait} and ${theme.medias.mobileS}`} {
    padding-right: calc((100% - 220px )/2);
  };
`;

export const PageLinkLayout = css`
  padding-right: 3rem;
  padding-bottom: 1rem;
  &:after{
    padding-right: 3rem;
  };
  @media ${({ theme }) => theme.medias.portrait} {
    &:after{
      padding-right: 0;
      padding-left: 3rem;
    };
  };
  ${SocialsLayout};
`;
