import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import Reducer from './store/reducers';
import App from './components/App';
import Theme from './theme';
import GlobalStyle from './theme/Reset';
import RestoreScroll from './components/ReactRouterDom/RestoreScroll';

const store = createStore(Reducer, applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <RestoreScroll />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
