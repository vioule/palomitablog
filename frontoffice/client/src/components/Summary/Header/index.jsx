import React from 'react';
import styled from 'styled-components';
import { H3 } from '../Card/Categorie';

const Line = styled.div`
  height: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  margin: .5rem 0;
  @media ${({ theme }) => theme.medias.mobileM} {
    margin: .25rem 0;
  };
`;

const Articles = styled.div`
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.classic};
  font-size: .8rem;
  & span {
    font-weight: 300;
  }
  @media ${({ theme }) => theme.medias.tablet} {
    padding-right: .5rem;
  };
  @media ${({ theme }) => theme.medias.mobileM} {
    font-size: .7rem;
  };
`;

const Categorie = styled(H3)`
  @media ${({ theme }) => theme.medias.tablet} {
    padding-left: .5rem;
  };
`;

const Div = styled.div`
  margin-top: 5rem;
  color: ${({ theme }) => theme.colors.dark};
  @media ${({ theme }) => theme.medias.mobileM} {
    margin-top: 2.5rem;
  };
`;

export default ({ categorie, length }) => (
  <Div>
    {categorie && <Categorie>{categorie}</Categorie>}
    <Line />
    <Articles>
      <b>{length}</b>
      <span>
        {` article${length > 1 ? 's' : ''}`}
      </span>
    </Articles>
  </Div>
);
