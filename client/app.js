//
// This is the client side entry point for the React app.
//

import React from "react";
import {render} from "react-dom";
import {routes} from "./routes";
import {Router, browserHistory} from "react-router";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {Provider} from "react-redux";
import {notify} from "react-notify-toast";
import {default as rootReducer} from "./reducers";

import "./styles/base.css";

const loggerMiddleware = createLogger()
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)

const configureStore = (reducer, preloadedState) => {
  return createStore(reducer, preloadedState, middleware)
}


// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.

require.ensure(["./sw-registration"], (require) => {
  require("./sw-registration")(notify);
}, "sw-registration");

window.webappStart = () => {
  const initialState = window.__PRELOADED_STATE__;
  const store = configureStore(rootReducer, initialState);

  render(
    <Provider store={store}>
      <Router history={browserHistory} children={routes}/>
    </Provider>,
    document.querySelector(".js-content")
  );
};
