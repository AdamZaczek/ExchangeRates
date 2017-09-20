import React from 'react';
import ReactDOM from 'react-dom';
import Init from './container/Init';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Init />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
