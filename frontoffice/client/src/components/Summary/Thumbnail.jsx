import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.div`
  width: 60%;
  height: 0;
  padding-bottom: 36%;
  overflow: hidden;
  @media ${({ theme }) => theme.medias.tablet} {
    position: relative;
    width: 100%;
    padding-bottom: 70%;
  };
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export default ({ thumbnail, reverse }) => (
  <Thumbnail reverse={reverse}>
    <Image src={thumbnail.data} alt={thumbnail.alt} />
  </Thumbnail>
);
