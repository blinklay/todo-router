const initialState = []

export const notesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_NOTES":
      return payload;

    default:
      return state;
  }
}