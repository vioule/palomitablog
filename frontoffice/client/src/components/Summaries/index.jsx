import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Summary from './Summary';

export const Div = styled.div`
  padding-top: 5rem;
  @media ${({ theme }) => theme.medias.mobileM} {
    padding-top: 2.5rem;
  };
`;

export default ({
  data, total, page, categorie,
}) => {
  const { state } = useLocation();
  const display = data.length > 5
    ? state && 'display' in state
      ? state.display
      : 5
    : data.length;
  const rest = total - display;
  return (
    <Div>
      <Header categorie={categorie} total={total} />
      {data.slice(0, display).map((article, index) => (
        <Summary key={article._id} article={article} reverse={index % 2 === 0} />
      ))}
      {rest > 0 && (
      <Footer
        categorie={categorie}
        page={page}
        rest={rest}
        skip={data.length}
        display={display}
      />
      )}
    </Div>
  );
};
