import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import setMenu from '../../store/menu/actions';

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 1.2rem;
  height: 1rem;
  background-color: transparent;
  margin: 20px;
  &>div {
    position: absolute;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.black};
    top: calc(50% - 1px);
    border-radius: 1px;
    transition: transform .25s 0s, top .25s .25s, bottom .25s .25s;
  }
  &>div:first-child {
    top: 0;
  };
  &>div:last-child {
    bottom: 0;
    top: unset;
  };

  ${({ trigger }) => (trigger && css`
    &>div {
      transform: rotateZ(45deg);
      transition: transform .25s .25s, top .25s 0s, bottom .25s 0s;
    }
    &>div:first-child {
    top: calc(50% - 1px);
    transform: rotateZ(-45deg);
    };
    &>div:last-child {
      bottom: calc(50% - 1px);
    };
  `)};

  @media ${({ theme }) => theme.medias.desktop} {
    margin: 16px 23px;
  };
  @media ${({ theme }) => theme.medias.tablet} {
    margin: 12px;
  };
  @media ${({ theme }) => theme.medias.mobile} {
    margin: 15px;
  };
  @media ${({ theme }) => theme.medias.mobileM} {
    margin: 7px 5px;
  };
  @media ${({ theme }) => theme.medias.mobileS} {
    margin: 5px 3px;
  };
`;

const Hamburger = ({ trigger, onClick }) => (
  <Button onClick={() => onClick(!trigger)} trigger={trigger}>
    <div />
    <div />
    <div />
  </Button>
);

export default connect(
  (state) => ({ trigger: state.menu }),
  { onClick: setMenu },
)(Hamburger);
