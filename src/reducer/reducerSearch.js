import { SET_SEARCH_TERM } from "../containers/Contianers";

const initalState = {
  term: null
};

const reducerSearch = (state = initalState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term
      };
    default:
      return state;
  }
};

export default reducerSearch;
