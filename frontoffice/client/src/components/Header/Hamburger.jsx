import React from 'react';
import styled from 'styled-components';

const Hamburger = styled.button`
  width: 1.2rem;
  height: 1rem;
  &>div {
    position: absolute;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.black};
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1px;
  }
  &>div:first-child {
    top: 0;
    transform: none;
  };
  &>div:last-child {
    bottom: 0;
    top: unset;
    transform: none;
  };
`;

export default () => (
  <Hamburger>
    <div />
    <div />
    <div />
  </Hamburger>
);
