import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_VALIDATE,
  FETCH_ARTICLES_FAILED,
  SET_ARTICLES,
} from './actions';

const DEFAULT_STATE = {
  isFetching: false,
  isValidated: false,
  isFailed: false,
  data: [],
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state, isFetching: true, isValidated: false, isFailed: false,
      };
    case FETCH_ARTICLES_VALIDATE:
      return {
        ...state, isFetching: false, isValidated: true, isFailed: false,
      };
    case FETCH_ARTICLES_FAILED:
      return {
        ...state, isFetching: false, isValidated: false, isFailed: true,
      };
    case SET_ARTICLES:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
