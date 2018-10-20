import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middlware = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlware))
);

export default store;
