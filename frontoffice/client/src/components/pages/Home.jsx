import React from 'react';
import { Link } from 'react-router-dom';
import Body from './styled-components/transitions';
import Summary from '../Summary';

const Home = ({ data }) => (
  <Body>
    {data.map((article, index) => (
      <Summary key={article._id} article={article} reverse={index % 2 === 0} />
    ))}
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
export default Home;
