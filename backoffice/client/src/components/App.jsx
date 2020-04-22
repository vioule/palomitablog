import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

const Body = styled.h1`
  color: red;
`;

const App = () => (
  <Body>
    Bonjour, vous êtes sur l&#39;application backoffice de Palomita Blog.
  </Body>
);
export default hot(App);
