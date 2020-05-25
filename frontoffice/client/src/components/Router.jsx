import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import Categorie from './pages/Categorie';
import About from './pages/About';
import Article from './pages/Article';
import Contact from './pages/Contact';
import Legals from './pages/Legals';
import NotFound from './pages/NotFound';

export default () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={1000}
        classNames="fade"
      >
        <Switch location={location}>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path={['/deco', '/style', '/cuisine', '/voyages']}>
            <Categorie
              data={data.filter((article) => article.categorie === location.pathname.slice(1))}
              categorie={location.pathname.slice(1)}
            />
          </Route> */}
          <Route exact path={['/deco', '/style', '/cuisine', '/voyages']}>
            <Categorie />
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
