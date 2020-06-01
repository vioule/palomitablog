import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';

export default () => {
  const history = useHistory();
  const [init, setInit] = useState(false);
  const setScroll = () => {
    history.replace(
      history.location.pathname,
      { ...history.location.state, scrollY: window.scrollY },
    );
  };
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.addEventListener('scroll', debounce(setScroll, 200));
    history.replace(history.location.pathname, { ...history.location.state, scrollY: 0 });
    setInit(true);
    return () => {
      window.removeEventListener('scroll', setScroll);
    };
  }, []);
  const scrollY = init
    ? history.location.state && 'scrollY' in history.location.state
      ? history.location.state.scrollY
      : 0
    : 0;
  useEffect(() => {
    const restoreScroll = setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 500);
    return () => clearTimeout(restoreScroll);
  }, [history.location.pathname]);

  return null;
};
