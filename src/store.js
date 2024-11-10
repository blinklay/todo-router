import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { notesReducer } from "./reducers/notesReducer";
import { importantNotesreducer } from "./reducers/importantNotesreducer";

export const reducer = combineReducers({
  notes: notesReducer,
  importantNotes: importantNotesreducer
})

export const store = createStore(reducer, applyMiddleware(thunk))