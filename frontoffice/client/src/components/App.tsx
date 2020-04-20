import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Contact from './pages/Contact';
import Legals from './pages/Legals';
import NotFound from './pages/NotFound';
import GlobalStyle from '../theme/Reset';


const App: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={1000}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path="/">
              <Home />
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
    </>
  );
};
export default hot(App);
