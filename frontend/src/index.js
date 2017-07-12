import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import store from './store';
import routes from './routes';

import './styles/main.css';

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      {routes}
    </CookiesProvider>
  </Provider>,
  document.getElementById('root'),
);
