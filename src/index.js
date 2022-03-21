import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles.css";

import { Store } from "./store";
import AllRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <AllRoutes />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
