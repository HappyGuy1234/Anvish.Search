import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import MainReducer from "./reducer/reducerStore";

const rootElement = document.getElementById("root");
const store = compose()(createStore)(MainReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
