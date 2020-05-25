import React from 'react';
import { Link } from 'react-router-dom';
import Main from './styled-components';
// import Summaries from '../Summaries';

const Categorie = (/* { data, categorie } */) => (
  <Main>
    {/* <Summaries categorie={categorie} data={data} /> */}
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
  </Main>
);
export default Categorie;
