// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';

import '../assets/stylesheets/application.scss';

import App from './containers/app';

const initialState = {
  rows: [['Barcelona', 'Barcelona Squad'],
         ['Real Madrid', 'Real Madrid Squad'],
         ['Milan', 'Milan Squad'],
         ['Liverpool', 'Liverpool Squad'],
         ['Bayer Munich', 'Bayer Munich Squad'],
         ['Lazio', 'Lazio Squad']]
};

const reducers = combineReducers({
  // key: reducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="view-container">
        <Switch>
          <Route path="/" exact component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
