import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
  SearchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { SearchField: action.payload });
    default:
      return state;
  }
}
