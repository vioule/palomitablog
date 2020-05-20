import React from 'react';
import { Link } from 'react-router-dom';
import Body from './styled-components/transitions';
import Summaries from '../Summaries';

const Categorie = ({ data, categorie }) => (
  <Body>
    <Summaries categorie={categorie} data={data} />
    <Link to="/article">
      Article
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
export default Categorie;
