import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { DEFAULT_STATE } from './reducers'
import rootSaga from './sagas'
import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  DEFAULT_STATE,
  composeEnhancers(applyMiddleware(sagaMiddleware, thunk))
);

sagaMiddleware.run(rootSaga)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))

registerServiceWorker();

//TODO: Remove all todos
//TODO: Remove all comments
//TODO: Use redux-thunk
//TODO: Fix fetch bug with json pos 0
//TODO: Use TS
//TODO: Remove bulma
//TODO: Apply Minimalist styles
//TODO: Add docker container
