import { setNotesAction } from "./setNotesAction";

export const toggleNoteStatusAction = (obj) => (dispatch) => {
  const { id, formData } = obj;
  const { title, text, isImportant, color } = formData

  dispatch({ type: "SET_IS_EDITING", payload: true })
  fetch(`http://localhost:3000/notes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      text,
      color,
      isImportant: isImportant ? false : true
    })
  })
    .finally(() => {
      dispatch(setNotesAction())
      dispatch({ type: "SET_IS_EDITING", payload: false })
    })
}