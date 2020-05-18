import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';

export default () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const setScroll = () => {
    history.replace(history.location.pathname, { scrollY: window.scrollY });
  };
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.addEventListener('scroll', debounce(setScroll, 200));
    history.replace(pathname, { scrollY: 0 });
    return () => {
      window.removeEventListener('scroll', setScroll);
    };
  }, []);
  useEffect(() => {
    const restoreScroll = setTimeout(() => {
      window.scrollTo(0, history.location.state.scrollY);
    }, 500);
    return () => clearTimeout(restoreScroll);
  }, [pathname]);

  return null;
};
