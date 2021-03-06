import { GET_BOOKS } from "../actions/types";

const initialState = {
  books: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload
      };
    default:
      return state;
  }
}
