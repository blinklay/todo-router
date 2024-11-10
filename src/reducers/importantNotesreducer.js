const initialState = []

export const importantNotesreducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_IMPORTANT_NOTE":
      return [
        ...state,
        payload
      ]

    default:
      return state
  }
}