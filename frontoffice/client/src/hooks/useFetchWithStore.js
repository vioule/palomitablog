import { useEffect, useState } from 'react';

const axios = require('axios');

export default (url, validate, dispatch) => {
  const [isFetching, setIsFetching] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isValidated, setIsValidated] = useState(validate);

  const fetchData = async () => {
    setIsFetching(true);
    setIsValidated(false);
    setIsFailed(false);
    try {
      const res = await axios.get(url);
      setIsFetching(false);
      setIsValidated(true);
      setIsFailed(false);
      dispatch(res.data);
    } catch (err) {
      setIsFetching(false);
      setIsValidated(false);
      setIsFailed(true);
    }
  };

  useEffect(() => { if (!validate) { fetchData(url); } }, []);

  return [isFetching, isFailed, isValidated];
};
