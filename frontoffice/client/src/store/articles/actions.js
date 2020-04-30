export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLES_VALIDATE = 'FETCH_ARTICLES_VALIDATE';
export const FETCH_ARTICLES_FAILED = 'FETCH_ARTICLES_FAILED';
export const SET_ARTICLES = 'SET_ARTICLES';
const axios = require('axios');

export const getArticles = () => async (dispatch) => {
  dispatch({ type: FETCH_ARTICLES });
  try {
    const res = await axios.get('api/getArticles');
    dispatch({ type: FETCH_ARTICLES_VALIDATE });
    dispatch({ type: SET_ARTICLES, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_ARTICLES_FAILED });
  }
};
