import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { notesReducer } from "./reducers/notesReducer";

export const reducer = combineReducers({
  notes: notesReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))