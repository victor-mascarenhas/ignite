import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import gamesReducer from "./reducers/gamesReducer";

const reducers = combineReducers({
  games: gamesReducer,
});

const middleware = [thunk];

const compose = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(reducers, compose);

export default store;
