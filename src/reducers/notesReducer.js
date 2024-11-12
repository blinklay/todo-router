const initialState = {
  notes: [],
  isLoading: false,
  isCreating: false,
  isDeleting: false,
  isEditing: false
}

export const notesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_NOTES":
      return {
        notes: payload,
        isLoading: false
      };

    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: payload
      }

    case "SET_IS_CREATING":
      return {
        ...state,
        isCreating: payload
      }

    case "SET_IS_DELETING":
      return {
        ...state,
        isDeleting: payload
      }

    case "SET_IS_EDITING":
      return {
        ...state,
        isEditing: payload
      }

    default:
      return state;
  }
}