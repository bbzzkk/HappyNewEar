import React from "react";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";

import RootStore from "./stores";

import App from "./App";

const root = new RootStore();

const Root = () => {
  return (
    <Provider {...root}>
        <BrowserRouter>
         <App />
        </BrowserRouter>
    </Provider>
  );
};

export default Root

