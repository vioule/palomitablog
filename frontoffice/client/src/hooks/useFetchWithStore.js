import { useEffect, useState } from 'react';
import axios from 'axios';

export default (request, validate, dispatch, page) => {
  const [status, setStatus] = useState(
    { isFetching: false, isFailed: false, isValidated: validate },
  );
  const fetchData = async () => {
    setStatus({ isFetching: true, isFailed: false, isValidated: false });
    try {
      const res = await axios.get(request.url, { params: request.params });
      setStatus({ isFetching: false, isFailed: false, isValidated: true });
      dispatch(res.data, page);
    } catch (err) {
      setStatus({ isFetching: false, isFailed: true, isValidated: false });
    }
  };
  useEffect(() => { if (!validate) { fetchData(request); } }, []);

  return [status];
};
