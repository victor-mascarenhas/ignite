import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import gamesReducer from "./reducers/gamesReducer";
import detailReducer from "./reducers/detailReducer";

const reducers = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

const middleware = [thunk];

const compose = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(reducers, compose);

export default store;
