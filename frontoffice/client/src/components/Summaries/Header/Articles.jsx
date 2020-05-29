import React from 'react';
import styled from 'styled-components';

export const Div = styled.div`
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

export default ({ total }) => (
  <Div>
    <b>{total}</b>
    <span>
      {` article${total > 1 ? 's' : ''}`}
    </span>
  </Div>
);
