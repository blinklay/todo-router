export const setNotesAction = () => (dispatch) => {
  fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: "SET_NOTES",
        payload: data
      })
    })
}