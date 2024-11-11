import { setNotesAction } from "./setNotesAction"

export const removeNoteAction = (id) => (dispatch) => {
  dispatch({ type: "SET_IS_DELETING", payload: true })
  fetch(`http://localhost:3000/notes/${id}`, {
    method: "DELETE"
  })
    .finally(() => {
      dispatch(setNotesAction())
      dispatch({ type: "SET_IS_DELETING", payload: false })
    })
}