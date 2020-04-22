import React from 'react';
import { Link } from 'react-router-dom';
import Body from './styled-components';

const About = () => (
  <Body>
    <Link to="/">
      Accueil
    </Link>
    <Link to="/contact">
      Contact
    </Link>
    <Link to="/article">
      Article
    </Link>
    <Link to="/legals">
      Mentions légales
    </Link>
  </Body>
);
export default About;
