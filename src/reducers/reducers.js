import notesReducer from "./notesReducer";
import visibilityReducer from "./visibilityFilter";
import { combineReducers } from "redux";

const reducer = combineReducers({
  notes: notesReducer,
  visibility: visibilityReducer
});

export default reducer;
