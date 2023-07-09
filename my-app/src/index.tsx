import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./store/userSliceCopy";
import createSagaMiddleware from "@redux-saga/core";
import userDataSaga from "./userDataSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { user: userReducer },
  middleware: [saga],
});

saga.run(userDataSaga);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
