import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import Thumbnail from './Thumbnail';

const Article = styled.article`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  &:first-of-type {
    margin-top: 5rem;
  };
  @media ${({ theme }) => theme.medias.tablet} {
    flex-direction: column;
  };
  @media ${({ theme }) => theme.medias.mobileM} {
    margin-top: 5rem;
    &:first-of-type {
      margin-top: 2.5rem;
    };
  };
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transition: opacity 1s linear;
`;

export default ({ article, reverse }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  return (
    <Article key={article._id} reverse={reverse} ref={ref} inView={inView}>
      <Card
        categorie={article.categorie}
        title={article.title}
        date={article.date}
        paragraph={article.content.find((x) => x.key.startsWith('P')).data}
        reverse={reverse}
      />
      <Thumbnail
        reverse={reverse}
        thumbnail={article.content.find((x) => x.key.endsWith('T'))}
      />
    </Article>
  );
};
