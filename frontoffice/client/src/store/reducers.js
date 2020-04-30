import { combineReducers } from 'redux';
import menu from './menu/reducer';
import articles from './articles/reducer';

export default combineReducers({
  menu,
  articles,
});
