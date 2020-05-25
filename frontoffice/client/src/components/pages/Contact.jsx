import React from 'react';
import { Link } from 'react-router-dom';
import Main from './styled-components';

const Contact = () => (
  <Main>
    <Link to="/">
      Accueil
    </Link>
    <Link to="/article">
      Article
    </Link>
    <Link to="/about">
      A propos
    </Link>
    <Link to="/legals">
      Mentions légales
    </Link>
  </Main>
);
export default Contact;
