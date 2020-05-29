import {
  SET_ARTICLES,
} from './actions';

const DEFAULT_STATE = {
  home: { total: 0, data: [] },
  deco: { total: 0, data: [] },
  style: { total: 0, data: [] },
  cuisine: { total: 0, data: [] },
  voyages: { total: 0, data: [] },
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_ARTICLES: {
      const { data, total, page } = action.payload;
      return {
        ...state,
        [page]: { data, total },
      };
    }
    default:
      return state;
  }
};
