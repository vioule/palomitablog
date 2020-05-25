import React from 'react';
import { Link } from 'react-router-dom';
import Main from './styled-components';

const About = () => (
  <Main>
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
  </Main>
);
export default About;
