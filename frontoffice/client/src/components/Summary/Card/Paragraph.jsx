import React from 'react';
import styled from 'styled-components';

export const P = styled.p`
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

export default ({ paragraph }) => <P dangerouslySetInnerHTML={{ __html: paragraph }} />;
