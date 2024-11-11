export const setNotesAction = () => (dispatch) => {
  dispatch({ type: "SET_IS_LOADING", payload: true })
  fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: "SET_NOTES",
        payload: data
      })
    })
    .finally(() => {
      dispatch({ type: "SET_IS_LOADING", payload: false })
    })
}