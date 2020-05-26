import {
  SET_ARTICLES,
} from './actions';

const DEFAULT_STATE = {
  data: [],
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
