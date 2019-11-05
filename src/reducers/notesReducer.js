import { ADD_NOTE, REMOVE_NOTE } from "../actions/actions";

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          title: action.title,
          content: action.content
        }
      ];

    case REMOVE_NOTE:
      return state.filter((note, index) => index != action.id);

    default:
      return state;
  }
};

export default notesReducer;
