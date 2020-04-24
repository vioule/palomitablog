import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import setMenu from '../../store/menu/actions';

const Button = styled.button`
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
    transform: ${({ trigger }) => (trigger ? 'rotateZ(45deg)' : 'none')};
    transition: ${({ trigger }) => (trigger
    ? 'transform .25s .25s, top .25s 0s, bottom .25s 0s'
    : 'transform .25s 0s, top .25s .25s, bottom .25s .25s')};
  }
  &>div:first-child {
    top: ${({ trigger }) => (trigger ? 'calc(50% - 1px)' : 0)};
    transform: ${({ trigger }) => (trigger ? 'rotateZ(-45deg)' : 'none')};
  };
  &>div:last-child {
    bottom: ${({ trigger }) => (trigger ? 'calc(50% - 1px)' : 0)};
    top: unset;
  };
  @media ${({ theme }) => theme.medias.mid} {
    margin: 16px;
  };
  @media ${({ theme }) => theme.medias.sml} {
    margin: 12px;
  };
  @media ${({ theme }) => theme.medias.portrait} {
    margin: 10px;
  };
  @media ${({ theme }) => theme.medias.phone} {
    margin: 7px;
  };
  @media ${({ theme }) => theme.medias.phonexs} {
    margin: 5px;
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
