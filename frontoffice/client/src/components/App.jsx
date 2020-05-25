import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './Header';
import Menu from './Menu';
import Router from './Router';
import { AppearOnMount } from '../theme/animations';

const App = () => (
  <AppearOnMount>
    <Header />
    <Menu />
    <Router />
  </AppearOnMount>
);
export default hot(App);
