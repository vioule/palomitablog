import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getArticles } from '../../store/articles/actions';
import Main from './styled-components';
import Summaries from '../Summaries';
import { PageLoader } from '../Loader';


const Home = ({
  getArticles, data, isFetching, isFailed, isValidated,
}) => {
  useEffect(() => { if (!data.length) { getArticles(); } }, []);
  return (
    <Main>
      <TransitionGroup>
        {isFailed && (
        <CSSTransition
          key="error"
          timeout={1000}
          classNames="fade"
        >
          <div>Une erreur est survenue.</div>
        </CSSTransition>
        )}
        { isValidated && (
        <CSSTransition
          key="content"
          timeout={1000}
          classNames="fade"
        >
          <div>
            <Summaries data={data} />
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
          </div>
        </CSSTransition>
        )}
        { isFetching && (
        <CSSTransition
          key="loader"
          timeout={1000}
          classNames="fade"
        >
          <PageLoader />
        </CSSTransition>
        ) }
      </TransitionGroup>
    </Main>
  );
};
export default connect(
  (state) => ({ ...state.articles }),
  { getArticles },
)(Home);
