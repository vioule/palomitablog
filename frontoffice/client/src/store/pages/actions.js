export const SET_PAGE_DATA = 'SET_PAGE_DATA';
export const ADD_PAGE_DATA = 'ADD_PAGE_DATA';

export const setPageData = (payload) => (
  { type: SET_PAGE_DATA, payload }
);
export const addPageData = (payload) => (
  { type: ADD_PAGE_DATA, payload }
);
