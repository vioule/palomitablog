import {
  SET_PAGE_DATA,
  ADD_PAGE_DATA,
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
    case SET_PAGE_DATA: {
      const { data, total, page } = action.payload;
      return {
        ...state,
        [page]: { data, total },
      };
    }
    case ADD_PAGE_DATA: {
      const { data, page } = action.payload;
      return {
        ...state,
        [page]: { ...state[page], data: state[page].data.concat(data) },
      };
    }
    default:
      return state;
  }
};
