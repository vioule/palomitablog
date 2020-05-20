import React from 'react';
import styled from 'styled-components';

export const Time = styled.time`
  margin-top: .5rem;
  line-height: .8rem;
  font-size: .8rem;
  font-family: ${({ theme }) => theme.fonts.special};
  color: ${({ theme }) => theme.colors.normal};
  text-align: right;
`;

export default ({ date }) => {
  const dateTime = date.split('T')[0];
  return <Time dateTime={dateTime}>{dateTime.replace(/-/g, '.')}</Time>;
};
