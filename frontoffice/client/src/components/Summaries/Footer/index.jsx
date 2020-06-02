import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Line, running } from '../styled-components';
import Articles from './Articles';
import { addPageData } from '../../../store/pages/actions';
import { Loader } from '../../Loader';


export const Div = styled.div`
  position: absolute;
  width: 100%;
`;

export const StyledTransitionGroup = styled(TransitionGroup)`
  ${running};
  text-align: center;
  height: 3rem;
`;

export default ({
  categorie, page, rest, skip, display,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(
    { isFetching: false, isFailed: false, isValidated: false },
  );
  const onClick = async () => {
    if (skip > display) {
      setStatus({ isFetching: false, isFailed: false, isValidated: true });
      setTimeout(() => {
        setStatus({ isFetching: false, isFailed: false, isValidated: false });
        history.replace(
          history.location.pathname,
          { ...history.location.state, display: display + 5 },
        );
      }, 500);
    } else {
      setStatus({ isFetching: true, isFailed: false, isValidated: false });
      try {
        const res = await axios.get('api/appendArticles', { params: { categorie, skip } });
        setStatus({ isFetching: false, isFailed: false, isValidated: true });
        setTimeout(() => {
          setStatus({ isFetching: false, isFailed: false, isValidated: false });
          history.replace(
            history.location.pathname,
            { ...history.location.state, display: display + 5 },
          );
          dispatch(addPageData({ ...res.data, page }));
        }, 500);
      } catch (err) {
        setStatus({ isFetching: false, isFailed: true, isValidated: false });
      }
    }
  };
  const { isFetching, isFailed, isValidated } = status;
  return (
    <StyledTransitionGroup>
      {
      isFailed
        ? (
          <CSSTransition
            key="error"
            timeout={1000}
            classNames="fade"
          >
            <Div>
              <div>Une erreur est survenue.</div>
            </Div>
          </CSSTransition>
        )
        : isFetching
          ? (
            <CSSTransition
              key="loader"
              timeout={1000}
              classNames="fade"
            >
              <Div>
                <Loader size="3rem" />
              </Div>
            </CSSTransition>
          )
          : isValidated
            ? (
              <CSSTransition
                key="hidden"
                timeout={1000}
                classNames="fade"
              >
                <Div />
              </CSSTransition>
            ) : (
              <CSSTransition
                key="content"
                timeout={1000}
                classNames="fade"
              >
                <Div>
                  <Line />
                  <Articles
                    rest={rest}
                    onClick={onClick}
                  />
                </Div>
              </CSSTransition>
            )
    }
    </StyledTransitionGroup>
  );
};
