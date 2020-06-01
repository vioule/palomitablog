import React from 'react';
import {
  Switch, Route, useHistory,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Summaries from './pages/Summaries';
import About from './pages/About';
import Article from './pages/Article';
import Contact from './pages/Contact';
import Legals from './pages/Legals';
import NotFound from './pages/NotFound';

export default () => {
  const history = useHistory();
  return (
    <TransitionGroup>
      <CSSTransition
        key={history.location.pathname}
        timeout={1000}
        classNames="fade"
      >
        <Switch location={history.location}>
          <Route exact path={['/', '/deco', '/style', '/cuisine', '/voyages']}>
            <Summaries page={history.location.pathname.slice(1) || 'home'} />
          </Route>
          <Route exact path="/article">
            <Article />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/legals">
            <Legals />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
