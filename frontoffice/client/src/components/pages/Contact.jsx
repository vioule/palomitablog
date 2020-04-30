import React from 'react';
import { Link } from 'react-router-dom';
import Body from './styled-components/transitions';

const Contact = () => (
  <Body>
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
  </Body>
);
export default Contact;
