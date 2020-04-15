import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

const Body = styled.h1`
  color: blue;
`;

const App: React.SFC = () => (
  <Body>
    Bonjour, vous êtes sur l&#39;application frontoffice de Palomita Blog.
  </Body>
);
export default hot(App);
