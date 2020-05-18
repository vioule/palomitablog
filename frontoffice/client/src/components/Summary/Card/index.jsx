import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Categorie from './Categorie';
import Date from './Date';
import Paragraph from './Paragraph';
import ArticleLink from './ArticleLink';

export const Div = styled.div`
  width: 40%;
  color: ${({ theme }) => theme.colors.black};
  padding-left: ${({ reverse }) => (reverse ? '5rem' : '0')};
  padding-right: ${({ reverse }) => (reverse ? '0' : '5rem')};
  align-self: stretch;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${({ theme }) => theme.medias.desktop} {
    padding-left: ${({ reverse }) => (reverse ? '2.5rem' : '0')};
    padding-right: ${({ reverse }) => (reverse ? '0' : '2.5rem')};
  };
  @media ${({ theme }) => theme.medias.tablet} {
    position: relative;
    width: 100%;
    padding-right: .5rem;
    margin-bottom: 1rem;
    padding-left: .5rem;
  };
`;

export default ({
  categorie, title, date, paragraph, reverse,
}) => (
  <Div reverse={reverse}>
    <Categorie categorie={categorie} />
    <Title title={title} />
    <Paragraph paragraph={paragraph} />
    <ArticleLink link="/" />
    <Date date={date} />
  </Div>
);
