export const addNoteAction = (formData) => (dispatch) => {
  dispatch({ type: "SET_IS_CREATING", payload: true })
  fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: formData.title,
      text: formData.text,
      isImportant: false,
      color: formData.color
    })
  }).finally(() => dispatch({ type: "SET_IS_CREATING", payload: false }))
}