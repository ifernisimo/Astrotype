import { applyMiddleware, combineReducers, createStore } from "redux";
import gameReducer from "./reducers/game-reducer";
import { createLogger } from "redux-logger";

let reducers = combineReducers({
  game: gameReducer,
});

const logger = createLogger({
  diff: true,
});

let store = createStore(reducers, applyMiddleware(logger));

export default store;
