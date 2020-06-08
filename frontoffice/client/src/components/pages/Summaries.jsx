import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { setPageData } from '../../store/pages/actions';
import Main from './styled-components';
import Summaries from '../Summaries';
import { PageLoader } from '../Loader';
import useFetch from '../../hooks/useFetchWithStore';
import Footer from '../Footer';

const Page = ({ setPageData, content, page }) => {
  const categorie = page === 'home' ? null : page;
  const [{ isFetching, isFailed, isValidated }] = useFetch(
    { url: 'api/getArticles', params: { categorie } },
    !!content[page].data.length,
    setPageData,
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
          <>
            <Summaries
              page={page}
              categorie={categorie}
              {...content[page]}
            />
            <Footer />
          </>
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
  (state) => ({ content: state.pages }),
  { setPageData },
)(Page);
