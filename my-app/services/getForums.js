import { API_URL } from '../utils/constants';

const path = API_URL + '/forums';
const auth = 'auth_token=';

const buildUrl = (query, token) => {
  if (query != null) {
    return path + `?query=${query}&${auth}${token}`;
  }

  return path + '?' + auth + token;
};

const getForums = async (token, query = null) => {
  const response = await fetch(buildUrl(query, token));

  if (response.status === 200) {
    return await response.json();
  } else {
    const error = new Error('Not correct!');
    error.status = 403;
    return error;
  }
};

export default getForums;
