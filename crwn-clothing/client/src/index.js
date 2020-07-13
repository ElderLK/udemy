import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';

import store from './redux/store';

ReactDOM.render(
  <Provider store={store.store}>
    <BrowserRouter>
      <PersistGate persistor={store.persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
document.getElementById('root')); 

serviceWorker.register();
