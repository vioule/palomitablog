import {
  SET_ARTICLES,
} from './actions';

const DEFAULT_STATE = {
  home: [],
  deco: [],
  style: [],
  cuisine: [],
  voyages: [],
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return { ...state, [action.payload.page]: action.payload.data };
    default:
      return state;
  }
};
