import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import Header from './Header';
import Menu from './Menu';
import { getArticles } from '../store/articles/actions';
import { AppLoader as Loader } from './Loader';
import { TransitionDisplay } from './pages/styled-components/transitions';
import Router from './Router';

const App = ({
  getArticles, data, isFetching, isFailed, isValidated,
}) => {
  useEffect(() => { getArticles(); }, []);
  return (
    <>
      {isFetching && <Loader />}
      <TransitionDisplay appear={isValidated || isFailed}>
        {
        isFetching
          ? null
          : isFailed
            ? <div>Une erreur est survenue.</div>
            : (
              <>
                <Header />
                <Menu />
                <Router data={data} />
              </>
            )
      }
      </TransitionDisplay>
    </>
  );
};
export default hot(
  connect(
    (state) => ({ ...state.articles }),
    { getArticles },
  )(App),
);
