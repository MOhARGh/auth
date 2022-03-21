import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

// Import all sagas
import sagas from "./sagas";
import reducers from "./ducks";

// Initialize middlewares array
const middlewares = [];

// Create middleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

// Compose middleware and Redux DevTools
const composeEnhancers =
  process.env.NODE_ENV === "development" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

// Create store with middlwares
const Store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

// Initialize middleware
sagaMiddleware.run(sagas);

export { Store };
