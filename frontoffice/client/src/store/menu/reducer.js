import {
  SET_MENU,
} from './actions';

export default (state = false, action) => {
  switch (action.type) {
    case SET_MENU:
      return action.payload;
    default:
      return state;
  }
};
