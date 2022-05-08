import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import todos from "./todo.reducer";

const rootReducer = combineReducers({ todos });

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
