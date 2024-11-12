import { setNotesAction } from "./setNotesAction"

export const editNodeAction = (obj) => (dispatch) => {
  const { id, formData } = obj
  dispatch({ type: "SET_IS_EDITING", payload: true })
  fetch(`http://localhost:3000/notes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "title": formData.title,
      "text": formData.text,
      "isImportant": formData.isImportant,
      "color": formData.color,
    })
  })
    .finally(() => {
      dispatch(setNotesAction())
      dispatch({ type: "SET_IS_EDITING", payload: false })
    })
}