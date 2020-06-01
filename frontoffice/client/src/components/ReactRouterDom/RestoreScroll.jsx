import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';

export default () => {
  const history = useHistory();
  const setScroll = () => {
    history.replace(
      history.location.pathname,
      { ...history.location.state, scrollY: window.scrollY },
    );
  };
  const scrollY = history.location.state && 'scrollY' in history.location.state ? history.location.state.scrollY : 0;
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.addEventListener('scroll', debounce(setScroll, 200));
    history.replace(history.location.pathname, { ...history.location.state, scrollY: 0 });
    return () => {
      window.removeEventListener('scroll', setScroll);
    };
  }, []);
  useEffect(() => {
    const restoreScroll = setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 500);
    return () => clearTimeout(restoreScroll);
  }, [history.location.pathname]);

  return null;
};
