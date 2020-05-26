import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { setArticles } from '../../store/articles/actions';
import Main from './styled-components';
import Summaries from '../Summaries';
import { PageLoader } from '../Loader';
import useFetch from '../../hooks/useFetchWithStore';

const Page = ({ setArticles, data, page }) => {
  const categorie = page === 'home' ? null : page;
  const [{ isFetching, isFailed, isValidated }] = useFetch(
    { url: 'api/getArticles', params: { categorie } },
    !!data[page].length,
    setArticles,
    page,
  );
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
            <Summaries data={data[page]} categorie={categorie} />
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
  (state) => ({ data: state.articles }),
  { setArticles },
)(Page);
