import styled, { css } from 'styled-components';

export const H3 = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
  @media ${({ theme }) => theme.medias.mobileM} {
    font-size: .8rem;
  };
`;

export const Line = styled.div`
  height: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  margin: .5rem 0;
  @media ${({ theme }) => theme.medias.mobileM} {
    margin: .25rem 0;
  };
`;

export const articles = css`
  font-family: ${({ theme }) => theme.fonts.classic};
  font-size: .8rem;
  & span {
    font-weight: 300;
  }
  @media ${({ theme }) => theme.medias.mobileM} {
    font-size: .7rem;
  };
`;

export const running = css`
  margin-top: 5rem;
  color: ${({ theme }) => theme.colors.dark};
  @media ${({ theme }) => theme.medias.mobileM} {
    margin-top: 2.5rem;
  };
`;
