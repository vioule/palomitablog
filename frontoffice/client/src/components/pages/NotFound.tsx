import React from 'react';
import { Link } from 'react-router-dom';
import Body from './styled-components';

const NotFound: React.FC = () => (
  <Body>
    <Link to="/">
      Accueil
    </Link>
  </Body>
);
export default NotFound;
