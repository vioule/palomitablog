import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './Header';
import Menu from './Menu';
import Router from './Router';
import Footer from './Footer';
import { AppearOnMount } from '../theme/animations';

const App = () => (
  <AppearOnMount>
    <Header />
    <Menu />
    <Router />
    <Footer />
  </AppearOnMount>
);
export default hot(App);
