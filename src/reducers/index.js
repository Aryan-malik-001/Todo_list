import { combineReducers } from "redux";
import todoReducer from "./Todo";

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
