export const SET_ARTICLES = 'SET_ARTICLES';

export const setArticles = (data, page) => (
  { type: SET_ARTICLES, payload: { data, page } }
);
