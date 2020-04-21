import React from 'react';
import { Link } from 'react-router-dom';
import Body from './styled-components';

const Article: React.FC = () => (
  <Body>
    <Link to="/">
      Accueil
    </Link>
    <Link to="/contact">
      Contact
    </Link>
    <Link to="/about">
      A propos
    </Link>
    <Link to="/legals">
      Mentions légales
    </Link>
  </Body>
);
export default Article;
