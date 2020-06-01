import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Line } from '../styled-components';
import { Div as HeaderDiv } from '../Header';
import Articles from './Articles';
import { addPageData } from '../../../store/pages/actions';

export const Div = styled(HeaderDiv)`
  text-align: center;
`;

export default ({
  categorie, page, rest, skip, display,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(
    { isFetching: false, isFailed: false },
  );
  const onClick = async () => {
    if (skip > display) {
      history.replace(
        history.location.pathname,
        { ...history.location.state, display: display + 5 },
      );
    } else {
      setStatus({ isFetching: true, isFailed: false });
      try {
        const res = await axios.get('api/appendArticles', { params: { categorie, skip } });
        setStatus({ isFetching: false, isFailed: false });
        history.replace(
          history.location.pathname,
          { ...history.location.state, display: display + 5 },
        );
        dispatch(addPageData({ ...res.data, page }));
      } catch (err) {
        setStatus({ isFetching: false, isFailed: true });
      }
    }
  };

  return (
    <Div>
      <Line />
      <Articles
        rest={rest}
        onClick={onClick}
      />
    </Div>
  );
};
