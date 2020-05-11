import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
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
const Title = styled.h2`
  margin-top: .5rem;
  font-weight: 400;
  font-size: 2.5rem;
  text-transform: uppercase;
  hyphens: auto;
  @media ${({ theme }) => theme.medias.desktop} {
    font-size: 2rem;
  };
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 3rem;
    margin-top: .25rem;
  };
  @media ${({ theme }) => theme.medias.mobileM} {
    font-size: 2rem;
  };
`;
const Categorie = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.normal};
  @media ${({ theme }) => theme.medias.mobileM} {
    font-size: .8rem;
  };
  & a {
    color: ${({ theme }) => theme.colors.normal};
  }
  & a:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

const Date = styled.time`
  margin-top: .5rem;
  line-height: .8rem;
  font-size: .8rem;
  font-family: ${({ theme }) => theme.fonts.special};
  color: ${({ theme }) => theme.colors.normal};
  text-align: right;
`;
const Paragraph = styled.p`
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.fonts.default};
  line-height: 1.25rem;
  max-height: 7.5rem;
  text-align: justify; 
  overflow: hidden;
  text-overflow: ellipsis;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 100%);
  }
  @media ${({ theme }) => theme.medias.desktop} {
    max-height: 9rem;
  };
  & br {
    content: ' ';
  }
  & br:after {
    content: ' ';
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: .5rem;
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.special};
  color: ${({ theme }) => theme.colors.normal};
  font-size: .8rem;
  font-style: italic;
  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export default ({
  categorie, title, date, paragraph, reverse,
}) => {
  const dateTime = date.split('T')[0];
  return (
    <Card reverse={reverse}>
      <Categorie to="/"><Link to="/">{categorie}</Link></Categorie>
      <Title>{title}</Title>
      <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }} />
      <StyledLink to="/">Continuer de lire</StyledLink>
      <Date dateTime={dateTime}>{dateTime.replace(/-/g, '.')}</Date>
    </Card>
  );
};
