import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default ({
  to, onClick, children, ...other
}) => {
  const { pathname } = useLocation();
  const handleOnClick = (e) => {
    if (to === pathname) {
      e.preventDefault();
    }
    if (onClick) {
      onClick();
    }
  };
  return (
    <Link to={to} onClick={handleOnClick} {...other}>
      {children}
    </Link>
  );
};
