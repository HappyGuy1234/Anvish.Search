import { SET_SEARCH_TERM } from "../containers/Contianers";

export const setSearchterm = (term) => {
  return {
    type: SET_SEARCH_TERM,
    term
  };
};
