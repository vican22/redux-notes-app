import { SHOW_ALL } from "../actions/actions";

const visibilitFilter = (visibility = SHOW_ALL, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return SHOW_ALL;

    default:
      return visibility;
  }
};

export default visibilitFilter;
